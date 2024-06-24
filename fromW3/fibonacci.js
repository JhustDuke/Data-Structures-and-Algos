module.exports = function fibi(nTimes = 5) {
	const newArray = [0, 1];

	for (let i = 0; i <= nTimes; i++) {
		let nextEl = newArray[i] + newArray[i + 1];
		newArray.push(nextEl);
	}
	return console.log(newArray);
};
