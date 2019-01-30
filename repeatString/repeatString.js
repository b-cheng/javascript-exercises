const repeatString = function(word, numOfTimes) {
	const finalWord=[]
	if (numOfTimes < 0){
		return 'ERROR'
	} else {
		for (var i = 0; i < numOfTimes; i++) {
			finalWord.push(word)
		}
		return finalWord.join('')
	}
}

module.exports = repeatString
