
exports.flop = function(val) {
	console.log('flop')
}

function breathe() {
	console.log('Blup Blup')
}

var flops = 0
exports.around = function(val){
	flops++
}

exports.howManyFlops = function() {
	return flops
}

exports.swim = function(direciton){
	console.log('I am swimming' + direction)
}

exports.breathe = breathe

