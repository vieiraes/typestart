"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    return res.send('Heloo World');
});
app.listen(3333);
