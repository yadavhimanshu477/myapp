const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const purchasablesRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const eraseRouter = require('./routes/erase');
const tradesRouter = require('./routes/trades');
const stocksRouter = require('./routes/stocks');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/erase', eraseRouter);
app.use('/trades', tradesRouter);
app.use('/stocks', stocksRouter);

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


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myapp';
let db;


MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  global.db = client.db(dbName);
  // console.log(global.db);
  // client.close();
});

module.exports = app;
