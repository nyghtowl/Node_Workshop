// create an express app that serves up an image tag to an image using static

var express = require('express');
var app = express();
app.Listen(8000);

app.use('/mages', express.static(__dirname + +'/images'))

var findBrowser = function(req, res, next){
	req.safari = (req.headers['user-agent']  === "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, Like Gecko) Chrom/20.0.1599.101 Safari/537.36") ? true : false 
	next();
};

app.get('/set1', findBrowser, function(req, res){
	res.send("<html><body><h1>you are chrome?" + req.safari + "<img src='/images/unicorn.jpg'</h1></body></html>");
})