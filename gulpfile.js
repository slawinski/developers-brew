const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      maps = require('gulp-sourcemaps'),
       del = require('del');

//This task joins many script files into one
gulp.task('concatScripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/js'))
});

//This task removes whitespaces, newlines etc. from code to decrease its size
gulp.task('minifyScripts', ['concatScripts'], function(){
  return gulp.src('src/js/app.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('src/js'))
})

//This task compiles Sass files into CSS
gulp.task('compileSass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/css'));
});

//This task watches for changes in the given filetypes
gulp.task('watchFiles', function(){
  gulp.watch('sass/**/*.scss',['compileSass']);
  gulp.watch('js/*.js', ['concatScripts']);
})

//This task deletes built files (usually before the next buid task)
gulp.task('clean', function(){
  del(['dist', 'src/css', 'src/js/app*.js*']);
})

//This task builds the dist files in the given order
gulp.task('build', ['minifyScripts', 'compileSass'], function(){
  return gulp.src(['src/css/style.css', 'src/js/app.min.js', 'src/img/**', 'src/fonts/**'], {base: './src'})
  .pipe(gulp.dest('dist'));
});

//I don't remember what this does lol
gulp.task('serve', ['watchFiles']);


//This default task shoudl be run with "gulp" command and all should happen automagically
gulp.task('default', ['clean'], function(){
  gulp.start('build');
});
