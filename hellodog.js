// Code School - testing setting up server side

var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	// response.write("Hello, this is dog here");
	response.end("Hello, this is dog here");
}).listen(8080);

console.log("Listening on port 8080...")