var http = require ('http');

var request = http.request('http://www.nytimes.com');

request.on('response', function(response) {
    console.log('Status: ' + response.statusCode);
    console.log('Headers: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function(d) {
        console.log('Chunk: ' + d);
    })
})

request.end();

