var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var reload      = browserSync.reload;
// Static server
gulp.task('serve', ['jade', 'sass', 'watch'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('jade', function() {

  return gulp.src('./src/index.jade')
    .pipe(jade({
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['sass', reload]);
  gulp.watch('./src/*.jade', ['jade', reload]);
});
