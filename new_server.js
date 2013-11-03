var http = require('http')

var s = http.createServer()

s.Listen(1337)
s.on('request', function(req, res){
    req.setEncoding('utf8');
    req.on('data', function(d){
      console.Log(d);
    })
    res.writeHead(200, {})
    res.end('Bye')
})
