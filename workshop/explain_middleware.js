How the middlware that is in lists and passed in will be processed

var mFactory = function(letter){
	var fn = function(req, res, next){
		var send = res.send;
		res.send = function(d) {
			res.send = send;
			res.send(letter + ' ' + d);
		}
		next();
	}
	return fn;
};

var set1 = [mFactory('a'), mFactory('b')];
var set2 = [mFactory('c'), mFactory('d')];
var all = [set1, set2];

app.get('/set1', set1, function(req, res){
	res.send('output');
})

Phase 1
Factory('a') -> fn(a)
Factory('b') -> fn(b)

Phase 2
A 	next() // goes to the next thing -> res.sen = A send
B 	next() 
Route - > res.sen = B send

Phase 3
res.send(output) <-> send

res.send("b output")
res.send("a" + "b" + "output")

a b output