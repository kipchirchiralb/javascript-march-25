// a function is a block of code that performs a specific task
// a is also resuable

function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("John");

sayHello("albert");

function sendEmail(to, subject, body) {
  // actual logic
  console.log(
    "Sending email to " + to + " with subject " + subject + " and body " + body
  );
}
// this function can be resuse in different scenarios
// OTP,  Maill list notification, tickets/support requests, payment vouchers/receipts/invoices, etc.

sendEmail("simeaon@gmail.com",  "Fee payment Update",  "your balance is : 5000, please pay by 25th of next month");

sendEmail("kevin@gmail.com",  "Next Intake Update",  "your next intake is on 25th of next month");

sendEmail("simeon@gmail.com", "OTP for signup ", "your otp is 123456");
