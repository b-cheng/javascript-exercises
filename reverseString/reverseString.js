const reverseString = function(word) {
	const splitWord=word.split('')
	const reverseWord=splitWord.reverse()
	const finalWord=reverseWord.join('')
	return finalWord
}

module.exports = reverseString
