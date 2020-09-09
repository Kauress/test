const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const partials = require('express-partials');
const routes = require('./routes/index');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/', routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
