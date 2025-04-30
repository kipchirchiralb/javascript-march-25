const user = {
  name: "John Doe",
  age: 30,
  email: "john@gmail.com",
  isAdmin: false,
  isActive: true,
  login: function loginFunc() {
    console.log("User logging in - This is a method of the user object");
  },
  logout: function logoutFunc() {
    console.log("User logging out - This is a method of the user object");
  },
  getUserInfo: function () {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  },
  updateEmail: (newEmail) => {
    // this is an anonymous arrow function
    user.email = newEmail;
    console.log("Email updated to: " + user.email);
  },
};

user.login();
// Methods are functions that are properties of an object.
// We still use the dot notation to access the method and call it like a function.
// Log age of user
console.log(user.age);
// Log name of user
console.log(user.name);
// log all user info using the getUserInfo method
console.log(user.getUserInfo());
// update email of user using the updateEmail method
user.updateEmail("doe@gmail.com"); // this syntax resembles the console.log() method , hence we can conclude that console is an object with properties and methods
console.log("githeri@gmail.com");
console.warn("This is a warning message");
console.error("This is an error message");
console.log(typeof console);
console.log(typeof user);
console.log(window.close());

/// Javascript comes qith very many objects that we can use to perform various tasks. For example, the console object is used to log messages to the console. The window object is used to access the browser window. The document object is used to access the HTML document. The navigator object is used to access the browser information. The location object is used to access the URL of the current page. The history object is used to access the browser history. The screen object is used to access the screen information. The localStorage and sessionStorage objects are used to store data in the browser.

// The functions inside the objects can be anonymous functions or named functions. This is because the property name will be used to call the function.
// For clean code , we can use anonymous arrow functions. Arrow functions do not use the function keyword. Instead you will see =>

console.log("10" * "12j"); // undefined,120
console.log("10" * 12); // undefined,
console.log("albert " + "evans");
// when you perform an arithmetic operation on a string, it will be converted to a number. But when you perform a string operation, it will be concatenated. If the numbers are not valid, it will return NaN. If the string is not a number, it will return NaN.
