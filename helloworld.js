var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html>I\'m learning Node\n</html>' + req.headers['user-agent']);
  if (req.headers['user-agent'] == "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36") {
     res.end('<html>Hey Chrome</html>' + req.headers['user-agent']);
  
   } else {
     res.end('<html>Hey Safari</html>' + req.headers['user-agent']);
   }

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
