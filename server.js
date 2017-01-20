// Dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser'); 
var bodyParser = require('body-parser');
var session = require('express-session'); 
var methodOverride = require('method-override'); 




var application_controller = require('./controllers/application_controller');

var main_controller = require('./controllers/main_controller');

var users_controller = require('./controllers/users_controller');

var landing_controller = require('./controllers/landing_controller');

var chat_controller = require('./controllers/chat_controller');






var app = express();


app.use(methodOverride('_method'));


app.use(session({ secret: 'app', cookie: { maxAge: 420000 }, resave: true, saveUninitialized: true}));
app.use(cookieParser());



app.set('views', path.join(__dirname, 'views'));


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', application_controller);
app.use('/main', main_controller);
app.use('/users', users_controller);

app.use('/landing', landing_controller);
app.use('/chat', chat_controller);



app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});


module.exports = app;
