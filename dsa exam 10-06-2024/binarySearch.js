
// Binary search


function binarySearchUsingStack(arr, target) {
  let stack = [];

  let start = 0;
  let end = arr.length - 1;

  stack.push({ start: start, end: end });

  while (stack.length > 0) {
      let { start, end } = stack.pop();

      if (start > end) {
          continue;
      }

      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
          return mid;
      }

      if (arr[mid] > target) {
          stack.push({ start: start, end: mid - 1 });
      } else {
          stack.push({ start: mid + 1, end: end });
      }
  }

  return -1; // Target not found
}

let arr = [1, 3, 5, 7, 9, 11, 13];
let target = 7;

console.log(binarySearchUsingStack(arr, target)); // Output: 3