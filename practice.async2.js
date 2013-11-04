// Use async.parallel to fetch 5 web pages and output the results to a file
// Use async.auto to get 2 files and poast them to HTTP server


var async = require('async'),
	http = require('http')

async.paralell([
	// function(cb) {
	// 	http.get('http://www.nytimes.com/', function(res){
	// 		cb(null, res)
	// 	})
	// },
	// function(cb) {
	// 	http.get('http://www.google.com/', function(res){
	// 		cb(null, res)
	// 	}).on('error', function(e) {
	// 		cb(e)
	// 	})
	// },
	function(cb){
		getSite('http://www.nytimes.com/', cb)
	}
	function(cb){
		getSite('http://www.bbc.com/', cb)
	}
], function(err, results) {
	console.log(results);
})


function getSite(website, callback){

	http.get(website, function(res){
		var data = ""
		res.setEncoding('utf8')
		res.on('data', function(d) {
			data += d
		})
		res.on('end', function(){
			cb(null, res)				
		})
	})

}

async.auto({ getData1:function(cb) {fs.readFile('foo.txt', function(file) {cb(null,file)})}, 
			getData2:function(cb){...}, 
			postToServer:['getData1', 'getData2', function(cb) {}]})
