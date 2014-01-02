// Code School - testing setting up server side

var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Hello, this is dog here");
	response.end();
}).listen(8080);

console.log("Listening on port 8080...")