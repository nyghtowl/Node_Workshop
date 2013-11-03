var fs = require('fs')

var fooStream = fs.createReadStream('foo.txt')
fooStream.setEncoding('utf8')
fooStream.on('readable', function() {
     var bytes = Math.floor(Math.random()*10)
     var chunk
     while ((chunk = fooStream.read(bytes)) != null) {
        for (var i=0; i<chunk.length; i++) {
		var j = chunk[i]
		if (j%3==0 && j%5==0) {
			console.log(j, "fizz buzz");
		}
		else if (i%3==0) {
			console.log(j, "fizz");
		}
		else if (i%5==0) {
			console.log(j, "buzz");
		}
		else {
			console.log(j);
		}
	}
      }
    })

