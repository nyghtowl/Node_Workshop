var http = require('http');

var s = new http.Server()
s.list(8000);
s.on('request', function(req,res) {
    var userAgent = req.headers['user-agent']
    res.writeHead(200, {'contetn-type': 'text/html'})
    if(userAgent != null && userAgent === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, Like Gecko) Chrom/20.0.1599.101 Safari/537.36') {
        res.end('<html><body>I\'m Learning Node (Hi Chrome)</body></html>');
    } else {
        res.end('<html><body>I\'m Learning Node</body></html>');
}
})

