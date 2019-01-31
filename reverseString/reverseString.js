const reverseString = function(word) {
	// first solution
	// const reverseWord=splitWord.reverse()
	// const finalWord=reverseWord.join('')
	// return finalWord

	// second solution
	const splitWord=word.split('').reverse().join('')
	return splitWord


}

module.exports = reverseString

