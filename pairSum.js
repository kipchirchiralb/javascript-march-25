// Write a function findPairsWithSum(arr, target) that takes an array of numbers arr and a target sum target, and returns all unique pairs of numbers that sum to the target. If no pairs are found, return an empty array.

const prices = [10, 22, 30, 40, 50, 10, 30, 60, 70, 50, 80, 90, 100];
let target = 110;

function findPairsWithSum(arr, target) {
  const pairs = []; // [ [100,10], [80,30], [70,40] , ]
  const seen = new Set(); // [100, 88, ]

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    console.log(complement);
    console.log(seen);
    if (seen.has(complement)) {
        console.log("Pushing to pairs " + arr[i]);
      // if the pair already exists in a revers form or just exists , skip
      if (!pairs.some((pair) => pair[0] === complement && pair[1] === arr[i])) {
        pairs.push([arr[i], complement]);
      }
    }
    seen.add(arr[i]);
  }
  return pairs;
}

const result = findPairsWithSum(prices, target);
console.log(result);
