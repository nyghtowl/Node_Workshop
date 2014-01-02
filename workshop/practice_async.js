// Use async.parallel to fetch 5 web pages and output the results to a file
// Use async.auto to get 2 files and poast them to HTTP server


var http = require('http'),
    async = require('async'),
    fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fileSystem.createReadStream(filePath);

    async.parallel([
        function(callback){
          request("http://cnn.com", function(err, response, body) {
            if(err) { console.log(err); callback(true); return; }
            console.log("function: 1")
            fs.writeFile("tmp.txt", body);
            callback(false);
          });
        },

        function(callback){
          request("http://google.com", function(err, response, body) {
            if(err) { console.log(err); callback(true); return; }
            console.log("function: 2")
            fs.writeFile("tmp.txt", body);
            callback(false);
          });
        },

        function(callback){
          request("http://bbc.com", function(err, response, body) {
            if(err) { console.log(err); callback(true); return; }
            console.log("function: 2")
            fs.writeFile("tmp.txt", body);
            callback(false);
          });
        },

        function(callback){
          request("http://nyghtowl.io", function(err, response, body) {
            if(err) { console.log(err); callback(true); return; }
            console.log("function: 2")
            fs.writeFile("tmp.txt", body);
            callback(false);
          });
        }
    ]);
}).listen(3000);