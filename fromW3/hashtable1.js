const hashArray = new Array(10).fill(null);
function hash_function(value, arr) {
	let sumOfChar = 0;
	let index;
	for (let el of value) {
		sumOfChar += el.codePointAt(0);
	}
	index = sumOfChar % 10;
	return (arr[index] = value);
}

/**
 * A hash function takes a value and converts it into a unique identifier called a hash code.
 * This hash code is used to determine the index or position where the value will be stored in a container,
 * typically an array, known as a hash table.
 *
 * The primary objectives of a hash function are:
 * 1. Generating a hash code that is unique for each distinct value, minimizing collisions (cases where two different values produce the same hash code).
 * 2. Distributing values evenly across the available slots in the hash table, promoting efficient storage and retrieval.
 *
 * A hash table provides methods for storing, retrieving, and deleting values based on their hashed identifiers.
 *
 * Key components of a hash table include:
 * - Hash Function: The algorithm responsible for generating hash codes from values.
 * - Bucket: Each slot or position in the hash table where values are stored. In cases of collision, multiple values may be stored in the same bucket.
 * - Collision Resolution: Strategies for handling collisions, such as chaining (using linked lists or arrays within buckets) or open addressing (probing adjacent slots).
 *
 * Common operations supported by a hash table:
 * - Insertion: Adding a new value to the hash table.
 * - Lookup: Retrieving a value based on its key (hashed identifier).
 * - Deletion: Removing a value from the hash table.
 *
 * By efficiently distributing values across buckets and implementing effective collision resolution strategies,
 * a hash table offers fast and reliable data storage and retrieval capabilities.
 */
function hashFunction(value) {
	this.length = 10;
	this.hash = function (key) {
		let hash = 0;
		for (let el of value) {
			hash += el.codePointAt(0);
		}
		return hash % this.length;
	};
	this.container = new Array(this.length).fill(null).map(function () {
		return [];
	});
	this.search = function (str) {
		let index = this.hash(str);
		let searchIndex = this.container(index);
	};
	this.add = function (val) {
		let index = this.hash(key);
		this.container[index].push(val);
	};
	this.query = function () {
		return console.log(this.container);
	};
}

const test = new hashFunction("tesm");
test.add();
test.query();

const test2 = new hashFunction("tesn");
test2.add();
test2.query();
test2.search();
