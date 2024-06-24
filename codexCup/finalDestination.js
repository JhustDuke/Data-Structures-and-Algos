module.exports = function destination(arrOfDestination) {
	const startCities = new Set();
	const endCities = new Set();
	let finalDestination;
	for (let i = 0; i < arrOfDestination.length; i++) {
		for (let j = 0; j < arrOfDestination[i].length; j++) {
			startCities.add(arrOfDestination[i][0]);
			endCities.add(arrOfDestination[i][1]);
		}
	}
	for (let city of endCities) {
		if (!startCities.has(city)) {
			finalDestination = city;
			break;
		}
	}
	return console.log(finalDestination);
};
const cities = [
	["london", "new york"],
	["new york", "lima"],
	["sao paulo", "lima"],
];
