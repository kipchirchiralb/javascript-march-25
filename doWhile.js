let count = 1;

do {
  console.log("Hello victor");
  console.log("Counting at " + count);

  count = count + 1;
} while (count < 10);

// initial value , iterator(increasing or decreasing), condition(at some point it time, the loop will end)
const fs = require("fs");

for (let index = 4000; index < 2000; index++) {
  console.log("Code insid the loop block {}");
  //   fs.writeFileSync(
  //     `reportcard${index}.txt`,
  //     `Report card for student ${index}`
  //   );

  fs.unlinkSync(`reportcard${index}.txt`);
}

// what are template literals in javascript ---- TASK 1
