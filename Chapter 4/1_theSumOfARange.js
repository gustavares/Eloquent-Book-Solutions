function range(start, end, step) {
	var array = [];
	
	if (!step)
		step = 1;
	
	 if (step < 0) {
		for (var count = start; count >= end; count+=step)
	 		array.push(count);
	 }

	for (var count = start; count <= end; count+=step)
		array.push(count);
	return array;
}

function sum(array) {
	var sum = 0;
	for (var count = 0; count < array.length; count++) {
		sum += array[count];
	}
	return sum;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55