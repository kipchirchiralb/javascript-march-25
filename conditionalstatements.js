// if else ,,, switch case

// grading system
let mark = 60;
if (mark > 80) {
  console.log("Grade : A");
} else if (mark > 60) {
  console.log("Grade : B");
} else if (mark > 40) {
  console.log("Grade : C");
} else {
  console.log("Grade : D");
}

let isHappy = true;
if (isHappy) {
  console.log("I am Happy");
} else {
  console.log("I am not Happy");
}

// function to postfix st nd rd th e.g. dates in a month 1st, 2nd , 3rd, 4th, 11th, 12th, 13th, 21st, 22nd, 23rd, 31st, etc.
function addPostFixToNumber(num) {
  if (num > 31 || typeof num !== "number") {
    return "Invalid date"; // error checking/ input validation
  }
  if (num % 10 === 1 && num !== 11) {
    return num + "st";
  } else if (num % 10 === 2 && num !== 12) {
    return num + "nd";
  } else if (num % 10 === 3 && num !== 13) {
    return num + "rd";
  } else {
    return num + "th";
  }
}
console.log(addPostFixToNumber(21));
console.log(addPostFixToNumber(29));
console.log(addPostFixToNumber(13));
console.log(addPostFixToNumber(22)); // 22nd
console.log(addPostFixToNumber("twenty")); // 22nd

// % modulus operator  - gives the remainder after whole number division - e.g. 8%3 gives 2 because 8/2 gives 2 with a remainder of 2
// 12%3 gives 0 because 12/3 gives 4 with no remainder

// TASK/ASSignment -- ask gpt to explain all operators in javascript -- use code to document the findings
// array vs object  methods 

// What is a method in javascript? 