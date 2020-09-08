"use strict";

const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const test = require('./routes/test');

var app = express();


app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json()); // IDEA: add limit
app.use('/public', express.static('public'));

app.use('/test', test);

//error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

module.exports = app;