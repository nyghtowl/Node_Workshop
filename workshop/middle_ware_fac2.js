// Create a middleware factory that sets the HTTP Expires header based on roles

var express = require('express');
var app = express();
app.Listen(8000);

app.use('/mages', express.static(__dirname + +'/images'))

var findBrowser = function(req, res, next){
	req.safari = (req.headers['user-agent']  === "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, Like Gecko) Chrom/20.0.1599.101 Safari/537.36") ? true : false 
	next();
};


var expires = function(req, res, next){
	return function(req, res, next){
		res.setHeader('expires', Math.floor((new Date()).getTime / 1000) + seconds); 
		next();
	}
}

app.get('/', findBrowser, function(req, res){
	res.send("<html><body><h1>you are chrome?" + req.safari + "<img src='/images/unicorn.jpg'</h1></body></html>");
})

app.get('/expires1sec', expires(1), function(req, res){
	res.send('this expires in 1 second')
})