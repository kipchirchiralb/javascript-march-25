const receptionist = {
  name: "Albert Evans",
  age: 25,
  email: "albert@lobo.co.ke",
  isAdmin: false,
  isActive: true,
  confirmCheckin: function confirmCheckinFunc() {
    console.log(
      "User checking in - This is a method of the receptionist, giving them ability to check in a client to the hotel"
    );
    // actual logic - updating db that a client has chekcin to a certain room and the room is now occupied(can not be booked by another client)
  },
  clearRoom: function clearRoomFunc() {
    console.log(
      "User checking out - This is a method of the receptionist, giving them ability to check out a client from the hotel"
    );
    // actual logic - updating db that a client has checked out of a certain room and the room is now available for booking
  },
};

// access values in an object - dot notation
console.log(receptionist.name); // Albert Evans
console.log(receptionist.age); // 25
receptionist.confirmCheckin(); // calling the function that is a method of the object

// A funciton that is an object property is called a method.
// TASK. call the clearRoom method of the receptionist object
receptionist.clearRoom();
//An object is the most important data type in js. JS objects are used to store collections of data and more complex entities. Console is an object in js. most of the things we do in js are done using objects.

console.clear();

// JAvascrit comes with built in objects that are used to perform tasks
// Exampl Math object
console.log(Math.round(3.74256935945));
console.log(Math.sqrt(81));
console.log(Math.E);

// Other js objects -  Array, String, Date, RegExp, Number, Object, Function, Boolean, Error, etc.