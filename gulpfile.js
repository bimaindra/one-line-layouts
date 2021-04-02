const gulp = require("gulp");
const atomizer = require("gulp-atomizer");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const cssnano = require('gulp-cssnano');
const cssMinify = require('gulp-css-minify');
const sourcemaps = require('gulp-sourcemaps');

//-- ENV
let isDebug = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production');

//--- BROWSER SYNC INIT
gulp.task("browser-sync", (done) => {
  browserSync.init({
    server: {
      baseDir: "./build",
    },
  });
  done();
});

//--- BROWSER SYNC RELOAD
gulp.task("browser-reload", (done) => {
  browserSync.reload();
  done();
});

//--- COMPILE ATOMIC CSS
gulp.task("acss", () => {
  return gulp
    .src("./public/*.html")
    .pipe(
      atomizer({
        // the filename of your output file.
        // Default is `atomic.css`
        outfile: "atomic.css",
        // Configuration options to pass to atomizer.
        // This will have your variables, breakpoint definitions, etc.
        // Either `require` it from a separate file or include it inline
        acssConfig: require("./atomic-config"),
        // Custom css generation options to pass to atomizer's `getCSS` function.
        // This is an undocumented feature of atomizer, so I don't test for it.
        cssOptions: {
          namespace: "",
        },
        // A hook for another undocumented feature of atomizer.
        // You can use it to create custom ACSS 'functions'.
        // Calls `acss.addRules(options.addRules)` under the hood.
        // See the tests for an example of how to use this.
        addRules: require("./atomic-rules.js"),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(cssMinify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("build/assets/css"));
});

//--- COMPILE SASS
sass.compiler = require("node-sass");

gulp.task("scss", function () {
  return gulp
    .src("./assets/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.init())
    .pipe(cssMinify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("./build/assets/css"));
});

//--- MOVE IMAGE FILES
gulp.task("image", () => {
  return gulp
    .src(["./assets/images/**/*.*"])
    .pipe(gulp.dest("./build/assets/images"));
});

//--- MOVE HTML FILES
gulp.task("html", () => {
  return gulp.src(["./public/*.html"]).pipe(gulp.dest("./build"));
});

//-- COMPILE ASSETS
gulp.task("compile", gulp.series("acss", "scss", "html", "image"));

//--- SERVING FILES
gulp.task(
  "serve",
  gulp.series("compile", "browser-sync", () => {
    gulp.watch(
      ["./public/*.html", "./assets/**/*.scss"],
      gulp.series("compile", "browser-reload")
    );
  })
);

//--- DEFAULT TASK
gulp.task("default", isDebug ? gulp.series("serve") : gulp.series("compile"));
