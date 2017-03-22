//this code can handle arrays being nested deep inside the original array

function flatten (arr) {
	var arrAsString = arr.toString()
	var flatArr = arrAsString.split(',')
	for(var i = 0; i < flatArr.length; i++) {
 		if(+flatArr[i]) flatArr[i] = +flatArr[i]
	}
  	return flatArr
}
