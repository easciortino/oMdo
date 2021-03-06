var express = require('express');
var middleware = require('./middleware');
require('dotenv').config();

var app = express();
middleware(app, express);

var port = process.env.PORT;

app.listen(port, console.log.bind(console, 'Listening on port', port));

module.exports = app;
