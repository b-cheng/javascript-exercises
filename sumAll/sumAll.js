const sumAll = function(first, last) {
	if ((first < 0) || (!first.typeOf === 'number')) {
		return 'ERROR'
	} else if ((last < 0) || (!last.typeOf === 'number')) {
		return 'ERROR'
	} else {
		var finalSum=0
		for (var i=first; i <= last; i++) {
			finalSum+=i
		}
		return finalSum
	}
}

module.exports = sumAll
