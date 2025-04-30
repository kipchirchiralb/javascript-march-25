// Javascript also comes with an object called String, that provides methods to manipulate string.
// Example of string methods are :

// 1. charAt() - returns the character at the specified index in a string

const email = "alb.ert@eldohub.co.ke"; // 6-1
console.log(email.charAt(8)); // returns the first character of the string);

const firstChar = email.charAt(0); // returns the first character of the string
const lastChar = email.charAt(email.length - 1); // returns the last character of the string
const secondChar = email.charAt(1); // returns the second character of the string

console.log(secondChar);

// 2. split() - splits a string into an array of substrings based on a specified separator. The separator can be a string or a regular expression. If no separator is specified, the entire string is returned as a single element array.
const emailParts = email.split("@"); // splits the string into an array of substrings based on the @ character
const emailParts2 = email.split("."); // splits the string into an array of substrings based on the . character
console.log(emailParts); // returns ["albert", "eldohub.co.ke"]
console.log(emailParts2); // returns ["albert@eldohub", "co", "ke"]

let doc =
  " splits a string into an array of substrings based on a specified separator. The separator can be a string or a regular expression. If no separator is specified, the entire string is returned as a single element array.";
const result = doc.replaceAll("separator", "divider"); // replaces all occurrences of the word "separator" with "divider" in the string
console.log(result);

// 3. toUpperCase() - converts a string to uppercase letters
const emailUpper = email.toUpperCase(); // converts the string to uppercase letters
console.log(emailUpper); // returns "ALBERT@ELDOHUB.CO.KE

// other string methods include : splice, slice, replace, trim, indexOf, lastIndexOf, includes, startsWith, endsWith, toLowerCase, concat, length, valueOf, search, match, repeat etc.
