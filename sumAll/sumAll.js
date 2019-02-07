const sumAll = function(first, last) {
	if ((first < 0) || (!first.typeOf === 'number')) {
		return 'ERROR'
	} else if ((last < 0) || (!last.typeOf === 'number')) {
		return 'ERROR'
	} else if (first < last) {
		var finalSum=0
		for (var i=first; i <= last; i++) {
			finalSum+=i
		}
		return finalSum
	} else {
		//something to figure out how to reverse this
	}
}

module.exports = sumAll
