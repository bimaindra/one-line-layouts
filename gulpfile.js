const gulp = require('gulp');
const atomizer = require('gulp-atomizer');
const sass = require('gulp-sass');
const cssMinify = require('gulp-css-minify');
const sourcemaps = require('gulp-sourcemaps');
const noop = require('gulp-noop');
const del = require('del');
const logSymbols = require('log-symbols');
const browserSync = require('browser-sync').create();

//-- ENV
let isDebug = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production');


//--- DIRECTORY MAPPING
const root = {
  src: './src',
  build: './build',
  assets: './src/assets',
  npm: './node_modules',
};

const dir = {
  source: {
      public: `${root.src}/public`,
      css: `${root.assets}/css`,
      scss: `${root.assets}/scss`,
      js: `${root.assets}/js`,
      images: `${root.assets}/images`,
      fonts: `${root.assets}/fonts`,
  },
  build: {
      base: `${root.build}`,
      css: `${root.build}/assets/css`,
      js: `${root.build}/assets/js`,
      images: `${root.build}/assets/images`,
      fonts: `${root.build}/assets/fonts`,
  },
};


//--- BROWSER SYNC INIT
gulp.task('browser-sync', (done) => {
  browserSync.init({
    server: {
      baseDir: dir.build.base,
    },
  });
  done();
});


//--- BROWSER SYNC RELOAD
gulp.task('browser-reload', (done) => {
  browserSync.reload();
  done();
});


//-- CLEANUP BUILD FOLDER
gulp.task('clean', () => {
  console.log(logSymbols.info,'Clean up build folder...');
  return del([root.build])
});


//-- FINISH COMPILE MESSAGES
gulp.task('compile-done', (done) => {
  console.log(logSymbols.success,'All is compiled!');
  done()
});


//--- COMPILE ATOMIC CSS
gulp.task('acss', () => {
  return gulp
    .src(`${dir.source.public}/*.html`)
    .pipe(
      atomizer({
        // the filename of your output file.
        // Default is `atomic.css`
        outfile: 'atomic.css',
        // Configuration options to pass to atomizer.
        // This will have your variables, breakpoint definitions, etc.
        // Either `require` it from a separate file or include it inline
        acssConfig: require('./atomic-config'),
        // Custom css generation options to pass to atomizer's `getCSS` function.
        // This is an undocumented feature of atomizer, so I don't test for it.
        cssOptions: {
          namespace: '',
        },
        // A hook for another undocumented feature of atomizer.
        // You can use it to create custom ACSS 'functions'.
        // Calls `acss.addRules(options.addRules)` under the hood.
        // See the tests for an example of how to use this.
        addRules: require('./atomic-rules.js'),
      })
    )
    .pipe(!isDebug ? noop() : sourcemaps.init())
    .pipe(isDebug ? noop() : cssMinify())
    .pipe(!isDebug ? noop() : sourcemaps.write('./maps'))
    .pipe(gulp.dest(dir.build.css));
});


//--- COMPILE SASS
sass.compiler = require('node-sass');

gulp.task('scss', function () {
  return gulp
    .src(`${dir.source.scss}/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(!isDebug ? noop() : sourcemaps.init())
    .pipe(isDebug ? noop() : cssMinify())
    .pipe(!isDebug ? noop() : sourcemaps.write('./maps'))
    .pipe(gulp.dest(dir.build.css));
});


//--- MOVE IMAGE FILES
gulp.task('image', () => {
  return gulp
    .src([`${dir.source.images}/**/*.*`])
    .pipe(gulp.dest(dir.build.images));
});


//--- MOVE HTML FILES
gulp.task('html', () => {
  return gulp.src([`${dir.source.public}/*.html`]).pipe(gulp.dest(dir.build.base));
});


//-- WATCH FILES
gulp.task('watch-files', () => {
  gulp.watch(`${dir.source.scss}/**/*.scss`, gulp.series(gulp.parallel('scss'), 'browser-reload'));
  gulp.watch(`${dir.source.public}/pages/*.html`, gulp.series(gulp.parallel('acss', 'copy-html'), 'browser-reload'));
  console.log('\t' + logSymbols.info,'Watching for changes...');
});


//-- COMPILE FILES
gulp.task('compile', gulp.series('clean', gulp.parallel('acss', 'scss', 'html', 'image')));


//--- SERVING FILES
gulp.task('serve', gulp.series('clean', gulp.parallel('acss', 'scss', 'html', 'image'), 'browser-sync', 'watch-files'));


//--- DEFAULT TASK
gulp.task('default', gulp.series('compile', 'compile-done'));
