'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
 
gulp.task('styles', function () {
  return gulp.src('./app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    // TODO: Get autoprefixer working
    // .pipe(autoprefixer({
    //   browsers: ['last 2 versions'],
    //   cascade: false
    // }))
    .pipe(gulp.dest('./app/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function() {
  gulp.watch('./app/sass/*.scss', ['styles']);
});


gulp.task('default', ['styles', 'watch'], function() {

});



