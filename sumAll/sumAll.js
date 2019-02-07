const sumAll = function(first, last) {
	if ((first < 0) || (last < 0)) {
		return 'ERROR'
	} else if ( typeof first !== "number" || typeof last !== "number") {
		return 'ERROR'
	} else if (first < last) {
		var finalSum=0
		for (var i=first; i <= last; i++) {
			finalSum+=i
		}
		return finalSum
	} else if (first > last) {
		//something to figure out how to reverse this
		var finalSum=0
		var fakeFirst = first
		first=last
		last=fakeFirst
		for (var i=first; i <= last; i++) {
			finalSum+=i
		}
		return finalSum
	}
}

module.exports = sumAll