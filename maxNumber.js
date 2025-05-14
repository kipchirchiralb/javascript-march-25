// Write a function that finds and returns the largest number in a given array of integers.

// steps

/**
 * first sort the array
 * get the last element of the array
 * return the last element
 */

const marks = [12, 95, 89, 34, 56, 78, 8, 32];

function getMaxNumber(integersArray) {
  const sortedArray = integersArray.sort();
  return sortedArray[sortedArray.length - 1];
}

console.log(getMaxNumber(marks)); // 95

// Every function in JavaScript has a return value. If a function does not explicitly return a value, it returns undefined by default.

// When using an array method, know what it does and what it returns. It is also important to know that some methods change the original array, while others do not.

// e.g pop() -- removes last element, returns that element

console.log(marks);
const result = marks.pop();
console.log(marks);
console.log(result);

const sortResult = marks.sort();
console.log(sortResult);
// sort() -- sorts the array, returns the sorted array. Sort changes the original array.
