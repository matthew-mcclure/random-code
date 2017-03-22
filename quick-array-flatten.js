//this code uses fewer lines, but cannot handle arrays nested inside the already nested arrays - ex. [1,[2,[3,4]]]

function flatten (arr) {
	var flatArr = [].concat.apply([], arr)
  	return flatArr
}
