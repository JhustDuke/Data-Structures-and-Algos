module.exports = function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		mobile: for (let j = 0; j < arr.length - 1 - i; j++) {
			let currentVal = arr[j];
			let nextVal = arr[j + 1];
			if (currentVal > nextVal) {
				arr[j + 1] = currentVal;
				arr[j] = nextVal;
			}
		}
	}

	console.log(arr);
};
// [17, 12, 9, 11, 3]
