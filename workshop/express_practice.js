// Create an express app with routes that capture '/' '/products' '/services'
// Create a route that cpatures the product ID after '/product/' and returns it in the response

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
	res.render();
});


app.get('/product/:id', function(req, res){
    var body = request.params.id;
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);

	// res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
	
	// render s.end(body);
	res.send(body);

});

app.get('/services', function(req, res){
    var body = 'Natt beep';
	
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);

	// res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
	
	// render s.end(body);
	res.render(body);

});