/**
 * Created by yarden on 5/25/16.
 */

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var exec = require('child_process').exec;

// Compile and automatically prefix stylesheets
gulp.task('sass', function () {
  return gulp.src([
    'styles/**/*.scss', '!styles/**/_*.scss'
  ])
    .pipe($.newer('.tmp/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({precision: 10}).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('styles'));
});

gulp.task('build', function(cb) {
  exec('jspm build cg-core - d3 - css build/cg-core.js --format umd  --skip-rollup --dev', function(err) {
    console.log('jspm build ', err || '');
    if (err) return cb(err);
    cb();
  });
});

gulp.task('dist', function(cb) {
  exec('jspm build cg-core - d3 build/cg-core.js --format umd', function(err) {
    console.log('jspm build ', err || '');
    if (err) return cb(err);
    cb();
  });
});

gulp.task('watch-build', ['build'], function() {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('watch-sass', function() {
  gulp.watch('styles/**/*.scss', ['sass']);
});

// gulp.task('watch', ['watch-build', 'watch-sass'] );

gulp.task('watch',['sass', 'build'], function() {
  gulp.watch('styles/**/*.scss', ['sass', 'build']);
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('default', ['sass']);