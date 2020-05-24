var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('express').Router();



var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

require('./routes/user.route')(app);
require('./routes/todo.route')(app);


module.exports = app;
