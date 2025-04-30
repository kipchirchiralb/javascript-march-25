## Working With Strings Practice assignment

Write a function that counts the number of vowels (a, e, i, o, u) in a string

Palindrome checker: Write a function that takes a string as an argument and returns a boolean indicating whether the string is a palindrome (a word or phrase that reads the same forwards and backwards). You can use string methods such as split(), reverse(), and join() to accomplish this task.

Reverse string: Write a function that takes a string as an argument and returns the string reversed. You can use string methods such as split(), reverse(), and join() to accomplish this task.

Longest word in a string: Write a function that takes a string as an argument and returns the longest word in the string. You can use string methods such as split(), and length to accomplish this task.

##### Write a JavaScript program that analyzes a given paragraph and performs the following tasks:

- Word Count: Count the total number of words in the paragraph. Ignore punctuation and consider hyphenated words as a single word.

- Longest Word: Find and display the longest word in the paragraph. In case of multiple words with the same longest length, display the first one encountered.

- Word Frequency: Determine the frequency of each word in the paragraph. Create an object where the keys are the unique words and the values are the corresponding frequencies.

- Most Frequent Word: Identify the word(s) with the highest frequency in the paragraph. Display the word(s) and its frequency. If there are multiple words with the same highest frequency, display all of them.

Your program should take the paragraph as input and output the results.

## Sample Output

Paragraph: "JavaScript is an amazing programming language. It is versatile and widely used in web development. JavaScript allows developers to create interactive and dynamic web pages."

Word Count: 20
Longest Word: "programming"
Word Frequency:
{
"javascript": 2,
"is": 2,
"an": 1,
"amazing": 1,
"programming": 1,
"language": 1,
"it": 1,
"versatile": 1,
"and": 1,
"widely": 1,
"used": 1,
"in": 1,
"web": 1,
"development": 1,
"allows": 1,
"developers": 1,
"to": 1,
"create": 1,
"interactive": 1,
"dynamic": 1,
"pages": 1
}
Most Frequent Word(s): "javascript" and "is" (frequency: 2)
