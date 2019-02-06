const removeFromArray = function(args) {
 //loop through the first indexes array and find any value that equals the 2nd index and onward
 const arr=arguments[0]
 for (var i=1;i<arguments.length;i++) {
	 //maybe see if the value at the index is included in the array?
	 if (arr.includes(arguments[i])){
	 	//splice whereever it matches the array (indexOf?)
	 	arr.splice(arr.indexOf(arguments[i]),1)
	 }
 }
 return arr
}

module.exports = removeFromArray
