const arr = [22, 13, 14, 5, 6, 10];

/**
 * the second smallest number must be bigger than the first smallest but less than the element(s)
 */
function _2ndSmallestElement(arr) {
	let firstSmallestElement = Infinity;
	let secondSmallestElement = Infinity;
	for (let currentElement of arr) {
		//if the current elem is smaller than that stored in firstSmallestElement interchange
		//[22, 13, 14, 5, 6, 0];
		if (currentElement < firstSmallestElement) {
			secondSmallestElement = firstSmallestElement;
			firstSmallestElement = currentElement;
			console.log(
				"cur:-",
				currentElement,
				"fir:-",
				firstSmallestElement,
				"sec:-",
				secondSmallestElement
			);
		} else if (currentElement < secondSmallestElement) {
			secondSmallestElement = currentElement;
			console.log(
				"cur:-",
				currentElement,
				"sec:-",
				secondSmallestElement,
				"fir:-",
				firstSmallestElement
			);
		}
	}
	return console.log(
		"this is the first smallest: ",
		firstSmallestElement,
		"this is the secondSmallest: ",
		secondSmallestElement
	);
}

function _3rdSmallestElement(arr) {
	let firstSmallestElement = Infinity;
	let secondSmallestElement = Infinity;
	let thirdSmallestElement = Infinity;
	for (let currentElement of arr) {
		//[22, 13, 14, 5, 6, 0]
		// first smallest
		if (currentElement < firstSmallestElement) {
			thirdSmallestElement = secondSmallestElement;
			secondSmallestElement = firstSmallestElement;
			firstSmallestElement = currentElement;

			//second smallest
		} else if (currentElement < secondSmallestElement) {
			thirdSmallestElement = secondSmallestElement;
			secondSmallestElement = currentElement;
			// third smallest element
		} else if (currentElement < thirdSmallestElement) {
			thirdSmallestElement = currentElement;
		}
	}
	console.log(
		"firstsmallest:-",
		firstSmallestElement,
		"SecondSmallest:-",
		secondSmallestElement,
		"thirdsmallest:-",
		thirdSmallestElement
	);
}
_2ndSmallestElement(arr);
