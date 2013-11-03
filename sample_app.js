var app = require('express')()


app.get('/', function(req, res){
    var body = 'Hello World';
	
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);

	if (req.query.page == 1){
		res.end(body);
	} else if (req.query.page == 2) {
		res.redirect('/tree');
	} else {
		res.end(body);
	}

});


app.get('/tree', function(req, res){
    var body = 'Natt beep';
	
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);

	res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
	
	res.end(body);
});

app.get('/cookie', function(req, res) {
	res.cookie('cookies', 'yah!')
	res.send('nom nom nom')
})

app.listen(3000)