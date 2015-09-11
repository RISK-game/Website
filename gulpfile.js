'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
// SCSS -> CSS
gulp.task('sass', function () {
  gulp.src('./css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/main.scss', ['sass']);
});


// Concat files into one so we don't need to add every single JS file
// to the HTML code
gulp.task('jsConcat', function() {
  // The core of angular is currently excluded to make debuing easier.
  gulp.src([
      '!./js/vendor/angular.js',
      './js/main.js',
      './js/config.js',
      './js/**/*.js'
    ])
    .pipe(concat('main.js', {newLine: '/*concat*/ \n'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('jsConcat:watch', function() {
  gulp.watch('./js/**/*.js', ['jsConcat']);
})


gulp.task('devBuild', ['sass', 'jsConcat']);
gulp.task('default', ['devBuild', 'sass:watch', 'jsConcat:watch']);
