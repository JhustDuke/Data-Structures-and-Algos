module.exports = function lowestVal(arr) {
	let lowestVal = arr[0];
	for (let el of arr) {
		if (el < lowestVal) {
			lowestVal = el;
		}
	}
	return console.log(lowestVal);
};
