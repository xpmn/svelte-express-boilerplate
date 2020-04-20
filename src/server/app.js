
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./spa/router');
const apiRouter = require('./api/router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
app.use(cookieParser(process.env.SECRET_KEY || 'SECRET_KEY'));
app.use(express.static(path.join(__dirname, '../../dist')));


app.use('/api', apiRouter);

app.use('/', indexRouter);


// protect the API:
app.disable('x-powered-by');

// error handler
app.use(function(err, req, res) {
  // render the error page
  res.status(err.status || 500);
  res.json(req.app.get('env') === 'development' ? {message: err.message} : {});
});

module.exports = app;
