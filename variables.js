// Varables are defined using the 'var', 'let', or 'const' keywords
// A variable stores a value that can be referenced and manipulated in your code//app

var username = "albert";

const PI = 3.142;

let age = 2025 - 2004;

// console.log(value) is a method to output/show the value to the browser console/terminal

console.log(age);
console.log(username);

console.log(PI * 2)

// var is an old way of declaring variables that was replace with const and let to make code less vulnerable to bugs

// const is used to declare constant/non-changing variables e.g. in your application, PI will never change

// let is used to declare variables that can be assigned new values as the user interacts with the application.

// In summary, using 'const' for constants and 'let' for variables that may change helps improve code stability and readability.

// Always remember to use meaningful variable names that reflect their purpose in your code. Do not use generic names like 'x' or 'temp' to enhance maintainability and make your code easier to understand.

let temp = 90 // not the best

let roomTemparature = 90 // better -- be descriptive while naming variables

// TASK 1:  Discus variable naming rules and conventions in js


// TASK 2:  Create a variable to store your name and age, then output them to the console using console.log()


//  a function to perform binary search through an array of words  -- 

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}