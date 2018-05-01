  const gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
        sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
        maps = require('gulp-sourcemaps'),
         del = require('del'),
 browserSync = require('browser-sync'),
     nodemon = require('gulp-nodemon');

//This task joins many script files into one
gulp.task('concatScripts', function () {
  return gulp.src([
    'src/js/script-a.js',
    'src/js/script-b.js',
    'src/js/script-c.js']) //Could've used src/js/*.js but "gulp default" throws an error "cannot find app.min.js"
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/js'))
});

//This task removes whitespaces, newlines etc. from JS scripts to decrease its size
gulp.task('minifyScripts', ['concatScripts'], function(){
  return gulp.src('src/js/app.js')
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
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

//This task removes whitespaces, newlines etc. from the CSS to decrease its size
gulp.task('minifyStyles', ['compileSass'], function() {
  return gulp.src(['src/css/*.css', '!./css/*.min.css'])
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'))
});

// //This task watches for changes in the given filetypes
// gulp.task('watchFiles', function(){
//   gulp.watch('sass/**/*.scss',['compileSass']);
//   gulp.watch('js/*.js', ['concatScripts']);
// })

//This task builds the dist files in the given order
gulp.task('build', ['minifyStyles', 'minifyScripts'], function(){
  return gulp.src(['src/css/style.min.css', 'src/js/app.min.js', 'src/img/**', 'src/fonts/**'], {base: './src'})
  .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', function() {
  nodemon({
    script: 'app.js',
    ext: 'js'
  })
  .on('restart', function() {
    console.log('>> node restart');
  })
});

//I don't remember what this does lol
gulp.task('browserSync', ['nodemon'], function(){
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true
  });
});

//This task deletes built files (usually before the next buid task)
gulp.task('clean', function(){
  del(['dist', 'src/css', 'src/js/app*.js*']);
});

//This default task shoudl be run with "gulp" command and all should happen automagically
gulp.task('default', ['clean', 'browserSync'], function(){
  gulp.start('build');
});
