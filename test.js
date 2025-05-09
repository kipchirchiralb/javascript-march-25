function testF(age) {
  if (age > 18) {
    return "You are an adult";
  } else {
    return true;
  }
}

// console .log is a development tool
testF();

// return statemtent ends the function execution
// if a value is returned, it will be the value of the function call
// by default, functions return undefined

console.log(typeof testF(14));
console.log(testF(34));
