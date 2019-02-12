const ftoc = function(f) {
 //(f - 32) * 5/9ths
	let c=(f-32)*(5/9)
	return parseFloat(c.toFixed(1))
}

const ctof = function(c) {
//c * 9/5ths + 32
	let f=c*(9/5)+32
	return parseFloat(f.toFixed(1))
}

module.exports = {
  ftoc,
  ctof
}
