const reverseString = function(word) {
	const splitWord=word.split('').reverse().join('')
	// const reverseWord=splitWord.reverse()
	// const finalWord=reverseWord.join('')
	// return finalWord
	return splitWord
}

module.exports = reverseString

