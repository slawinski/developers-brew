var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup

//TEST Handlebars instance path coniguration
var exphbs = require('express-handlebars');

var hbs = exphbs.create({
  layoutsDir: 'views/layouts',
  partialsDir: 'views/partials',
  defaultLayout: 'layout',
  extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// handlebars.getPartials().then(function (partials) {
//     console.log(partials);
//     // => { 'foo/bar': [Function],
//     // =>    title: [Function] }
// });

// hbs.registerPartials(__dirname + '/views/partials');

// // The below code loads all the partial templates in a directory and makes them available by filename:
// var hbs = require('hbs');
// var fs = require('fs');

// var partialsDir = __dirname + '/views/partials';

// var filenames = fs.readdirSync(partialsDir);

// filenames.forEach(function (filename) {
//   var matches = /^([^.]+).hbs$/.exec(filename);
//   if (!matches) {
//     return;
//   }
//   var name = matches[1];
//   var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
//   hbs.registerPartial(name, template);
// });

//TEST

// app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist'))); //This is the path to dist folder where gulp puts static files

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
