// HOF - High Order Functions in javascript - These are functions that take other functions as arguments or return a function as a result. All hofs do not change the original array. Most return a new array or a new value.

// unline .push() , .sort(), .includes() e.t.c that take strings, numbers, arrays, objects as arguments and return a value

// 1. Map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (number) {
  return number * 0.72;
});

console.log(doubled);

// 2. Filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const numbers2 = [
  43, 26, 33, 44, 50, 12, 56, 78, 90, 100, 101, 115, 411, 420, 11, 43,
];

// FILTER NUMBERS DIVISIBLE BY 3
const divisibleBy3 = numbers2.filter(function (number) {
  return number % 3 === 0;
});
console.log(divisibleBy3);
// The function passed as an argument is called a callback function.

// reduce, sort, some, find, forEach, are other examples of HOFs

// Array reduce method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// practical usecase is ->
