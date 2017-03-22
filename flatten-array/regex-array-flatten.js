//this code uses regex to flatten arrays and can handle deeply nested arrays

function flatten(arr) {
	arr = arr.toString()
	arr = arr.replace(/\[/g, '').replace(/\]/g, '')
  	arr = arr.split(',')
  	for(var i = 0; i < arr.length; i++) {
  		if(+arr[i]) arr[i] = +arr[i]
  	}
	return arr
}
