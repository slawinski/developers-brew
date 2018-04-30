const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      maps = require('gulp-sourcemaps'),
       del = require('del');

gulp.task('concatScripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/js'))
});

gulp.task('minifyScripts', ['concatScripts'], function(){
  return gulp.src('src/js/app.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('src/js'))
})

gulp.task('compileSass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/css'));
});

gulp.task('watchFiles', function(){
  gulp.watch('sass/**/*.scss',['compileSass']);
  gulp.watch('js/*.js', ['concatScripts']);
})

gulp.task('clean', function(){
  del(['dist', 'src/css', 'src/js/app*.js*']);
})

gulp.task('build', ['minifyScripts', 'compileSass'], function(){
  return gulp.src(['src/css/style.css', 'src/js/app.min.js', 'src/img/**', 'src/fonts/**'], {base: './'})
  .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task('default', ['clean'], function(){
  gulp.start('build');
});
