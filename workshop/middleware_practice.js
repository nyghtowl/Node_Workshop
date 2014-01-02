// Create a middleware to detect browser and attach a boolean to req

var express = require('express');
var app = express();
app.Listen(8000);

var findBrowser = function(req, res, next){
	req.safari = (req.headers['user-agent']  === "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, Like Gecko) Chrom/20.0.1599.101 Safari/537.36") ? true : false 
	next();
};

app.get('/set1', findBrowser, function(req, res){
	res.send("you are chrome?" + req.safari);
})