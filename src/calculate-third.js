function even_group_calculate_average(arr) {
	ret = [];
	one = [];
	two = [];
	third = [];
	r = [];
	ret = arr.filter(function(value,index,arr1){if(index%2==1)return true;else return false;}).filter(function(value){if(value%2==0)return true;else return false});
	if(ret.length==0){
		r[0]=0;
		return r;
	}
	third = ret.filter(function(value){if(value/100>=1)return true;else return false;});
	two = ret.filter(function(value){if(value/10>=1 && value/100<1)return true;else return false;});
	one = ret.filter(function(value){if(value/100<1 && value/10<1)return true;else return false;});
	if(third.length==0)
		r[2]=0;
	else{
		len = third.length;
		r[2]=third.reduce(function(value,sum){return sum+value},0)/len;
	}
	if(one.length==0 && two.length==0){
		t = [];
		t[0]=r[2];
		return t;
	}
	if(two.length==0)
		r[1]=0;
	else{
		len = two.length;
		r[1]=two.reduce(function(value,sum){return sum+value},0)/len;
	}
	if(one.length==0)
		r[0]=0;
	else{
		len = one.length;
		r[0]=one.reduce(function(value,sum){return sum+value},0)/len;
	}
	return r;
}
