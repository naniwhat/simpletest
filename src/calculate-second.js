function calculate_median(arr) {
	ret = [];
	ret = arr.filter(function(value,index,arr1){if(index%2==1)return true;});
	len = ret.length;
	return ret.reduce(function(value,sum){sum+=value;return sum;},0)/len;
}
