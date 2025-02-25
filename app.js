'use strict';

const path = require('path');

const express = require('express');
require('express-async-errors');

const app = express();

app.use(express.static(path.resolve(__dirname, 'src/public')));
app.set('views', path.resolve(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.get('/', async (request, response) => {
    response.render('index');
});


app.use( async (request, response, next) => {
    let error = new Error('Not Found');
    error.status = 404;
    response.status(404);
    response.redirect(301, `/`);
});


app.use( async (error, request, response, next) => {
    response.status(error.status || 500);
    response.redirect(301, `/`);
    console.error(error);
});


module.exports = app;
