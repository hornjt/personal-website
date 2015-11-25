/**
 * Created by Jon on 11/25/15.
 */
var morgan = require('morgan');
var express = require('express');
var path = require('path');
var app = express();
module.exports = app;

var pathToIndexHtml = path.join(__dirname + "/../" + 'views/index.html');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + '/../' + '/public')));
app.use(express.static(path.join(__dirname + '/../' + "/node_modules")));

app.get('/', function(req, res, next) {
    res.sendFile(pathToIndexHtml);
});
