// Write a function that takes an array of numbers and returns a new array with duplicate values removed.

let shoePrices = [100, 200, 300, 100, 200, 400, 500];
let hoodiePrices = [50, 100, 150, 50, 100, 200, 250];

function removeDuplicates(arr) {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// inccludes - check if the array includes a value
console.log(removeDuplicates(shoePrices));
console.log(removeDuplicates(hoodiePrices));

// check if the new array has a value, skip that value , else add the value to the new array
