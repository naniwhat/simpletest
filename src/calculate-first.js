function single_element(arr) {
	ret = [];
	ret = arr.filter(function(value,ret){if(ret%2==1) return true}).filter(function(value,index,arr1){if(arr1.indexOf(value)==arr1.lastIndexOf(value))return true;else return false;})
	return ret;
}
