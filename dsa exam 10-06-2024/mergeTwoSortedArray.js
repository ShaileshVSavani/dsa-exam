
function mergeSortedArrays(arr1, arr2) {

  let stack1 = [];
  let stack2 = [];


  for (let i = arr1.length - 1; i >= 0; i--) {
      stack1.push(arr1[i]);
  }
  for (let i = arr2.length - 1; i >= 0; i--) {
      stack2.push(arr2[i]);
  }

  let mergedArray = [];


  while (stack1.length > 0 && stack2.length > 0) {
      if (stack1[stack1.length - 1] < stack2[stack2.length - 1]) {
          mergedArray.push(stack1.pop());
      } else {
          mergedArray.push(stack2.pop());
      }
  }


  while (stack1.length > 0) {
      mergedArray.push(stack1.pop());
  }


  while (stack2.length > 0) {
      mergedArray.push(stack2.pop());
  }

  return mergedArray;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let mergedArray = mergeSortedArrays(arr1, arr2);

console.log(mergedArray);