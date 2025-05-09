// Javascript provides a variety of methods to manipulate strings.
// Here are some common string manipulation methods:
// Strings are indexed, meaning that each character in a string has a numerical index starting from 0.

// 1. Concatenation
console.log("Hello, " + "world!"); // Hello, world!
console.log("Hello, ".concat("world!")); // Hello, world!

// 2. Length
console.log("Hello, world!".length); // 13
// 3. Accessing Characters
console.log("Hello, world!".charAt(0)); // H
let username = "Kevin Karanja";

// 4. Substring
console.log(username.substring(0, 5)); // Kevin
console.log(username.substring(6)); // Karanja

//5. Slicing
console.log(username.slice(0, 3)); // Kev

//6. Replacing
console.log(username.replace("Kevin", "John")); // John Karanja  --- replaceAll

//7. Converting to Uppercase and Lowercase
console.log(username.toUpperCase()); // KEVIN KARANJA
console.log(username.toLowerCase()); // kevin karanja
//8. Trimming - used to remove whitespace from both sides of a string
let str = "   Hello, world!   ";
console.log(str.trim()); // "Hello, world!"

// 9. Splitting used to split a string into an array of substrings
let kijanaBomba = "kelvin kibet korir junior"
let names = kijanaBomba.split(" ");
console.log(names); // [ 'kelvin', 'kibet', 'korir', 'junior' ]
