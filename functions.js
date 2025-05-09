// {} - block of code

// a function is a reusable block of code that performs a specific task

function greet(name) {
  console.log("Hello, " + name + "!");
  console.log("Mimi imekusalimia!!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob"); // Output: Hello, Bob!
greet("Charlie"); // Output: Hello, Charlie!

// function declaration - creating the function
function sendEmail(emailaddress, content) {
  console.log("Sending email to " + emailaddress + " with content: " + content);
  console.log(
    "Barua pepe imetumwa kwa " + emailaddress + " na maudhui: " + content
  );
}

// uisng / callling / invoking the function

sendEmail("albert@eldohub.co.ke", "Hello Albert!");
sendEmail("jones@eldohub.o=co.ke", "your OTP is 352763");

// Arrow function - a shorter syntax for writing functions in js

const add = (a, b) => {
  console.log(a + b);
};

add(5, 10); // Output: 15
add(20, 30); // Output: 50
add(100, 200); // Output: 300

//  wHAT IS THE RETURN STATEMENT IN A FUNCTION?


// what is algorithm?
