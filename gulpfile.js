const gulp = require('gulp');
const atomizer = require('gulp-atomizer');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


//--- BROWSER SYNC INIT
gulp.task('browser-sync', done => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
});


//--- BROWSER SYNC RELOAD
gulp.task('browser-reload', done => {
  browserSync.reload();
  done();
});


//--- COMPILE ATOMIC CSS
gulp.task('acss', () => {
  return gulp
    .src('./public/*.html')
    .pipe(atomizer({
      // the filename of your output file.
      // Default is `atomic.css`
      outfile: 'atomic.css',
      // Configuration options to pass to atomizer.
      // This will have your variables, breakpoint definitions, etc.
      // Either `require` it from a separate file or include it inline
      acssConfig: require('./acssConf'),
      // Custom css generation options to pass to atomizer's `getCSS` function.
      // This is an undocumented feature of atomizer, so I don't test for it.
      cssOptions: {
        namespace: ''
      },
      // A hook for another undocumented feature of atomizer.  
      // You can use it to create custom ACSS 'functions'.
      // Calls `acss.addRules(options.addRules)` under the hood.
      // See the tests for an example of how to use this.
      addRules: require('./acssRules.js')
    }))
    .pipe(gulp.dest('dist/assets/css'));
});


//--- COMPILE SASS
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp
    .src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'));
});

//--- MOVE HTML FILES
gulp.task('html', () => {
    return gulp
      .src(['./public/*.html'])
      .pipe(gulp.dest('./dist'));
});


//--- SERVING FILES
gulp.task('serve', gulp.series('acss', 'scss', 'html', 'browser-sync', () => {
    gulp.watch(['./public/*.html', './assets/**/*.scss'], gulp.series('acss', 'scss', 'html', 'browser-reload'));
  })
);


//--- DEFAULT TASK
gulp.task('default', gulp.series('serve'));