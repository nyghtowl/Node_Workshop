var http = require('http')

var server = http.createServer()

server.on('request', function(req, res) {
    var url = req.url
    var opts = { host: 'www.nyghtimes.com', path: url, headers: req.headers }
    http.get(opts, function(response) {
       for(header in res.headers) {
           res.addHeader(header, response.headers[header])
       }	
       response.on('data', function(data) {
            res.write(data)
        })
        response.on('end', function() { 
          res.end()
        })
    })
})

server.listen(1337)
