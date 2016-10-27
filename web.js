var express = require('express');
var appExp = express();
var path = require('path');

appExp.use(express.static(__dirname));
appExp.use(express.static(path.join(__dirname, '/dist')));

var server = appExp.listen(process.env.PORT || 80);