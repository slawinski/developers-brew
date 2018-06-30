const gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
        sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
        maps = require('gulp-sourcemaps'),
         del = require('del'),
 browserSync = require('browser-sync').create(),
     nodemon = require('gulp-nodemon'),
       babel = require('gulp-babel'),
  handlebars = require('gulp-compile-handlebars');


//This task joins many script files into one
gulp.task('concatScripts', function () {
  return gulp.src(['src/js/*.js', '!src/js/app.js*'])
    .pipe(maps.init())
    .pipe(babel({
            presets: ['env']
    }))
    .pipe(concat('app.js'))
    .pipe(maps.write('./')) 
    .pipe(gulp.dest('src/js'));
});

//This task removes whitespaces, newlines etc. from JS scripts to decrease its size
gulp.task('minifyScripts', ['concatScripts'], function(){
  return gulp.src('src/js/app.js')
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/js'));
});


//This task compiles Sass files into CSS
gulp.task('compileSass', function () {
  return gulp.src('src/sass/main.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/css'));
});

//This task removes whitespaces, newlines etc. from the CSS to decrease its size
gulp.task('minifyStyles', ['compileSass'], function() {
  return gulp.src(['src/css/*.css'/*, '!src/css/*.min.css'*/])
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

//This task builds the dist files in the given order
gulp.task('build', ['minifyStyles', 'minifyScripts'], function(){
  return gulp.src(['src/img/**', 'src/fonts/**', 'src/video/**'], {base: './src'})
  .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', function() {
  return nodemon({
    script: 'app.js',
    ext: 'js'
    ,ignore: ['dist/**/*', 'src/js/app.js*']
  })
  .on('restart', function() {
    console.log('>> node restart');
  })
});

//I don't remember what this does lol
gulp.task('browserSync', ['nodemon'], function(){
  return browserSync.init(['src/sass/*.scss', "src/js/*.js", '!src/js/app.js*'], {
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true,
    tunnel: 'developers-brew' //url for people not in local ntwork
  });
});

//This task watches for changes in the given filetypes
gulp.task('watch', ['browserSync'], function(){
  gulp.watch('src/sass/*.scss',['minifyStyles']);
  gulp.watch(['src/js/*.js', '!src/js/app.js'], ['minifyScripts']);
  gulp.watch('views/**/*.hbs').on('change', browserSync.reload);
})

//This task deletes built files (usually before the next buid task)
gulp.task('clean', function(){
  del(['dist', 'src/css', 'src/js/app.js*']);
});

//This default task shoudl be run with "gulp" command and all should happen automagically
gulp.task('default', ['clean', 'watch'], function(){
  gulp.start('build');
});

gulp.task('html', () => {
  return gulp.src('./views/layouts/*.hbs')
    .pipe(handlebars({}, {
      ignorePartials: true,
      batch: ['./views/partials']
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('./dist'));
});