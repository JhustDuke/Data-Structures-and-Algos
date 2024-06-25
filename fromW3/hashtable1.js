class hashFunction {
	constructor(size = 10) {
		this.size = size;
		this.bucket = new Array(size).fill(null).map(function () {
			return [];
		});
	}
	hash(value) {
		let sum = 17;
		for (let i in value) {
			sum += value.charCodeAt(i);
		}
		return parseInt(sum / 10) % this.size;
	}
	get contents() {
		return console.log([...this.bucket]);
	}
	addData(data) {
		const index = this.hash(data);
		if (!this.bucket[index].includes(data)) {
			this.bucket[index].push(data);
		} else {
			console.log("duplication error ", data);
		}
	}
	getData(data) {
		const index = this.hash(data);
		return console.log(this.bucket[index]);
	}
	deleteData(data) {
		const index = this.hash(data);
		const bucketIndex = this.bucket[index].indexOf(data);
		if (bucketIndex !== -1) {
			this.bucket[index].splice(bucketIndex, 1);
		} else {
			return console.log(data, " does not exist in the table");
		}
	}
}

const t = new hashFunction();
t.addData("penny");
t.getData("penny");
t.deleteData("p");
t.contents;

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
