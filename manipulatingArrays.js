// Javascript provides a wide range of methods to manipulate arrays.
// Here are some of the most commonly used methods:

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.

const learners = ["alvin", "Simeon", "Emmy"];
console.log(learners);
learners.push("Dylan");

// 2. unshift(new) - Adds one or more elements to the beginning of an array and returns the new length of the array.
learners.unshift("Victor");
console.log(learners);

// 3. pop() - Removes the last element from an array and returns that element. This method changes the length of the array.
learners.pop();
console.log(learners);

// 4. shift() - Removes the first element from an array and returns that element. This method changes the length of the array.
learners.shift();
console.log(learners);
// 5. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The first argument specifies the index at which to start changing the array, and the second argument specifies the number of elements to remove.
const colors = ["red", "green", "pink", "orange", "blue", "yellow"];
colors.splice(2, 1); // red, yellow
console.log(colors);

// 6. sort() - Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, but you can provide a custom sorting function.
console.log(colors.sort());

// hof