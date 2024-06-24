/* 
this is an algorithm that took place in class
the lecturer created 3 groups A, B, C
AND then assigned each individual to each group e.g 
personA= group A, pB=gB till all the whole close has been allocated
*/

// method 1
let people = [1, 2, 3, 4, 5, 6, 55];
let cat1 = [];
let cat2 = [];

function allocate1(people, ...categoriz) {
	let counter = 0;
	for (let i = 0; i < people.length; i++) {
		categoriz[counter].push(people[i]);
		counter++;
		if (counter === categoriz.length) {
			counter = 0;
		}
	}
	console.log(categoriz);
}
//allocate(people,cat1,cat2);

const groupA = [];
const groupB = [];
const students = ["a", "b", "c", "d", "e", "f", "g"];

//this data structure is also called round-robin algo
function allocate2(studentsArray, ...groupList) {
	const numOfGroups = groupList.length;

	const numOfStudents = studentsArray.length;

	for (let i = 0; i < numOfStudents; i++) {
		let singleGroupName = i % numOfGroups;
		// the singleGroupName is used to make sure everything depends on the number of groups
		//the remainder (singleGroupName) cycles the group i.e if 3 groups g0,g1,g2
		//group[0].push[studentArr[i]]
		groupList[singleGroupName].push(studentsArray[i]);
	}
	console.log(groupList);
}

//allocate2(students, groupA, groupB);

// **************************exercises**********************************//

/** Given a list of student names and a list of room names, 
distribute the students evenly across the rooms. 
Write a function that returns an object where each key is a room name and 
the value is a list of students assigned to that room.*/

function allocateToRooms(listOfStudent, ...roomNames) {
	const obj = {};
	for (let i = 0; i < listOfStudent.length; i++) {
		let roomID = i % roomNames.length;
		roomNames[roomID].push(listOfStudent[i]);
		if (!obj["ROOM-" + roomID]) {
			obj["ROOM-" + roomID] = [listOfStudent[i]];
		} else {
			obj["ROOM-" + roomID].push(listOfStudent[i]);
		}
	}

	return obj;
}

/**
 * You have a list of tasks that need to be distributed
 * evenly among a given number of workers. Write a function
 * that takes a list of tasks and a number of workers and returns a list of lists
 * where each sublist contains the tasks assigned to each worker.
 *
 *
 */

function assignTaskToWorkers(listOfWorkers, ...listOfTask) {
	let counter = 0;
	for (let i = 0; i < listOfWorkers.length; i++) {
		listOfTask[counter].push(listOfWorkers[i]);
		counter++;
		if (counter === listOfTask.length) {
			counter = 0;
		}
	}
	return console.log(listOfTask);
}

// ****************************************************************************************//

//new idea implimentation pick random people to the group

module.exports = {
	allocate1,
	allocate2,
	allocateToRooms,
	assignTaskToWorkers,
};
