var http = require('http');

//var opts = {}

http.get('http://www.nytimes.com', function(res) {
  res.on('data', function(d) {
    console.Log(d);
  })
})
