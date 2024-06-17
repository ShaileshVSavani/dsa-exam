// sliding window

// (1) maxsum of three
// let arr = [53, 27, 33, 45, -5, 52];
// let k = 3
// let maxsum = 0
// let cursum = 0

// for (let i = 0; i < k; i++) {
//     cursum += arr[i]
//     if (cursum > maxsum) {
//         maxsum = cursum
//     }
// }

// for (let i = k; i < arr.length; i++) {
//     cursum = cursum - arr[i - k] + arr[i]
//     if (cursum > maxsum) {
//         maxsum = cursum
//     }
// }

// console.log(maxsum)

//========================================================================================

// (2) minsum of three elements

// let arr = [13, 27, 33, 45, -5, 52];
// let k = 3;
// let minsum = Infinity; // Corrected initialization
// let cursum = 0;

// // Calculate the sum of the first k elements
// for (let i = 0; i < k; i++) {
//     cursum += arr[i];
// }

// // Update minsum if the sum of the first k elements is smaller
// minsum = cursum;

// // Using sliding window approach to find the minimum sum of three consecutive elements
// for (let i = k; i < arr.length; i++) {
//     cursum = cursum - arr[i - k] + arr[i]; // Slide the window
//     if (cursum < minsum) {
//         minsum = cursum; // Update minsum if the current sum is smaller
//     }
// }

// console.log(minsum); // Output the minimum sum of three consecutive elements

//===================================================================================

//multiply except itself

// let nums = [1, 2, 3, 4, 5];
// let product = 1;

// // Calculate the product of all elements
// for (let i = 0; i < nums.length; i++) {
//     product *= nums[i];
// }

// // Create a new array to store the result
// let output = [];

// // Calculate the result for each element
// for (let i = 0; i < nums.length; i++) {
//     output.push(product / nums[i]);
// }

// console.log(output); // Output the array containing the products except itself

//===============================================================================================

// let arr = [13, 27, 33, 45, 51, 52];
// let target = 80
// let i = 0
// let j = arr.length - 1

// while (i < j) {
//     let sum = arr[i] + arr[j]
//     if (sum === target) {
//         console.log(arr[i], arr[j])
//         break
//     } else if (sum < target) {
//         i++
//     } else if (sum > target) {
//         j--
//     }
//     console.log(arr[i], arr[j])
// }

//========================================================================================

// 2D array
// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// let m = arr.length;
// let n = arr[0].length;

// for (let i = 0; i < m; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//         row += arr[i][j] + " ";
//     }
//     console.log(row);
// }

//========================================================================================

// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// let m = arr.length;
// let n = arr[0].length;

// for (let j = 0; j < n; j++) {
//     let row = "";
//     for (let i = 0; i < m; i++) {
//         row += arr[i][j] + " ";
//         // if (i < m - 1) {
//         //     row += ",";
//         // }
//     }
//     console.log(row);
// }

//========================================================================================

// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// let m = arr.length;
// let n = arr[0].length;

// for (let j = n - 1; j >= 0; j--) {
//     let row = "";
//     for (let i = m - 1; i >= 0; i--) {
//         row += arr[i][j] + ",";
//         // if (i > 0) {
//         //     row += ",";
//         // }
//     }
//     console.log(row);
// }

//============================================================================================

//diagonal array
// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];
// let row = arr.length
// let col = arr[0].length;

// // for (let i = 0; i < row; i++) {
// //     console.log(arr[i][i]);
// // }

// //or

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (i === j) {
//             console.log(arr[i][j]);
//         }
//     }
// }

//================================================================
//anti-diagonal array

// let arr = [
//   [1, 2, 3, 4],//i=0,j=3
//   [5, 6, 7, 8],//i=1,j=2
//   [9, 10, 11, 12],//i=2,j=1
//   [13, 14, 15, 16]//i=3,j=0
// ];
// let row = arr.length
// let col = arr[0].length;
// let k = col - 1
// console.log(k)
// for (let i = 0; i < row; i++) {
//      console.log(arr[i][k--])
//  }

//=================================================================
//boundary not print

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];
// let row = arr.length
// let col = arr[0].length;

// for (let i = 0; i < row; i++) {
//     let str = ``
//     for (let j = 0; j < col; j++) {
//         if (i === 0 || i === row - 1 || j === 0 || j === col - 1) {
//         }
//         else {
//             str += arr[i][j] + " "
//         }
//     }
//     console.log(str);
// }

//=================================================================

//printing boundaries

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ];
//   let row = arr.length
//   let col = arr[0].length;

//   for (let i = 0; i < row; i++) {
//       let str = ``
//       for (let j = 0; j < col; j++) {
//           if (i === 0 || i === row - 1 || j === 0 || j === col - 1) {
//             str += arr[i][j] + " "
//           }
//           else {
//               str += "   "

//           }
//       }
//       console.log(str);
//   }

//=================================================================

// print Z patterns

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ];
//   let row = arr.length;
//   let col = arr[0].length;

//   for (let i = 0; i < row; i++) {
//     let str = "";

//     for (let j = 0; j < col; j++) {
//       if (i + j === col - 1 || i === 0 || i === row - 1) {
//         str += arr[i][j] + " ";
//       } else {
//         str += "  ";
//       }
//     }

//     console.log(str);
//   }

//=================================================================

// print N patterns

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ];
//   let row = arr.length;
//   let col = arr[0].length;

//   for (let i = 0; i < row; i++) {
//     let str = "";

//     for (let j = 0; j < col; j++) {
//       if (i  === j || j === 0 || j === col - 1) {
//         str += arr[i][j] + " ";
//       } else {
//         str += "  ";
//       }
//     }

//     console.log(str);
//   }

//=================================================================

// find maximum

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 18, 11, -12],
//     [13, 149, 15, 16]
//   ];
//   let row = arr.length;
//   let col = arr[0].length;

// let max = arr[0][0];

// for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//         if (arr[i][j] > max) {
//             max = arr[i][j];
//         }
//     }
// }

// console.log(max);

//=================================================================

// row wise maximum

//   let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 18, 11, -12],
//     [13, 149, 15, 16]
//   ];
//   let row = arr.length;
// let col = arr[0].length;

// for (let i = 0; i < row; i++) {
//     let max = arr[i][0];
//     for (let j = 0; j < col; j++) {
//         if (arr[i][j] > max) {
//             max = arr[i][j];
//         }
//     }
//     console.log(max);
// }

//================================================================

// find row total maximum

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 18, 11, -12],
//     [13, 149, 15, 16]
//   ];

//   let row = arr.length;
//   let col = arr[0].length;

//   let maxRowSum = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < row; i++) {
//     let rowSum = 0;
//     for (let j = 0; j < col; j++) {
//       rowSum += arr[i][j];
//     }
//     if (rowSum > maxRowSum) {
//       maxRowSum = rowSum;
//     }
//   }

//   console.log(maxRowSum);

//================================================================

// count 1 and print which row counting maximum 1
//   let arr = [
//     [1, 2, 1, 4],
//     [1, 0, 1, -1],
//     [1, 6, 1, 1],
//     [13, 149, 1, 16]
// ];

// let row = arr.length;
// let col = arr[0].length;
// let maxRow = -1
// let max = 0;

// for (let i = 0; i < row; i++) {
//     let count = 0;
//     for (let j = 0; j < col; j++) {
//         if (arr[i][j] === 1) {
//             count++;
//         }
//     }
//     if (count > max) {
//         max = count;
//         maxRow = i;
//     }
// }

// console.log(max , maxRow);

//================================================================

// find duplicates
// let arr = [3, 4, 5, 2, 3, 2, 3, 2, 3, 6, 1]
// let results = [-1,-1];
// let maxCount = 0;
// let ele = 0;
// for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             count++;

//         }
//     }
//     if (count > maxCount) {
//         maxCount = count;
//         ele = arr[i];
//     }
// }

// console.log(ele, maxCount);
// if (maxCount > 1) {
//     results[0] = ele;
//     results[1] = maxCount;
//     console.log(results);
// }

//================================================================

// find prime numbers

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];
// const isPrime = (num) => {
//     if (num === 1) {
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (isPrime(arr[i][j])) {
//             console.log(arr[i][j]);
//         }
//     }
// }

//=================================================================

// (2) minsum of three elements

// let arr = [13, 27, 33, 45, -5, 52];
// let k = 3;
// let minsum = Infinity;
// let cursum = 0;

// for (let i = 0; i < k; i++) {
//   cursum += arr[i];
// }

// minsum = cursum;

// for (let i = k; i < arr.length; i++) {
//   cursum = cursum - arr[i - k] + arr[i];
//   if (cursum < minsum) {
//     minsum = cursum;
//   }
// }

// console.log(minsum);

//=================================================================

// find the maximum prime number
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// const isPrime = (num) => {
//     if (num === 1) {
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let maxPrime = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//         if (arr[i] > maxPrime) {
//             maxPrime = arr[i];
//         }
//     }
// }

// console.log(maxPrime);

//=================================================================

// find maximum increasing number and sum of them till max number
// let arr = [2, 3, 4, 5, 10, 7, 8, 9];

// let max = -1;
// let sum = 0;
// let currentSum = 0;
// let currentMax = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//         currentSum += arr[i];
//         currentMax = arr[i];
//     } else {
//         if (currentSum > sum) {
//             sum = currentSum;
//             max = currentMax;
//         }
//         currentSum = arr[i];
//         currentMax = arr[i];
//     }
// }

// // Final check in case the longest increasing sequence ends at the last element
// if (currentSum > sum) {
//     sum = currentSum;
//     max = currentMax;
// }

// console.log(max, sum);


//or
 

// let arr = [2, 3, 4, 5, 3, 4, 7, -1, 3, 4, 20];
// let sum = 0;
// let currentSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//         currentSum += arr[i];
//     } else {
//         if (currentSum > sum) {
//             sum = currentSum;
//         }
//         currentSum = arr[i];
//     }
//     if (currentSum > sum) {
//         sum = currentSum;
//     }

// }

// console.log(sum);

//=================================================================

//sort the array
// let arr = [2, 3, 4, 5, 3, 4, 7, -1, 3, 4, 20];

// arr.sort((a, b) => {
//     return a - b;
// })

// console.log(arr);

//or without using inbuilt methods sort the array
// let arr = [2, 3, 4, 5, 3, 4, 7, -1, 3, 4, 20];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr);


//================================================================

//set: in set only unique value store , no duplicate value

// let set = new Set();
// set.add(1)
// set.add(2)
// set.add(3)
// set.add(1)

// console.log(set);
// console.log(set.has(1))

//=================================================================

// set
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 1]
// let set = new Set();
// let n = arr.length
// let m = set.size

// for (let i = 0; i < n; i++) {
//     set.add(arr[i]);
// }

// console.log(set);
// console.log(set.size)

//=================================================================

//set
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 1];
// let set = new Set();
// let n = arr.length;

// for (let i = 0; i < n; i++) {
//     if (set.has(arr[i])) {
//         console.log(arr[i]);
//     } else {
//         set.add(arr[i]);
//     }
// }
// console.log(set);
// console.log(set.size);

//=================================================================
//set count duplicates perticurally
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 1,2,1,5];
// let set = new Set();
// let duplicates = {}; // Object to count duplicates

// for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//         if (duplicates[arr[i]]) {
//             duplicates[arr[i]]++;
//         } else {
//             duplicates[arr[i]] = 2; // Starting count at 2 since it's the second occurrence
//         }
//     } else {
//         set.add(arr[i]);
//     }
// }

// console.log('Duplicates and their counts:');
// for (const [key, value] of Object.entries(duplicates)) {
//     console.log(`${key}: ${value}`);
// }

// console.log(set);
// console.log(set.size);


//or  If you prefer a simpler way without this initialization complexity, using a Map can be more straightforward:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 1];
// let countMap = new Map();
// let duplicates = new Map();

// // Count the occurrences of each element in the array
// for (let i = 0; i < arr.length; i++) {
//     let count = countMap.get(arr[i]) || 0;
//     countMap.set(arr[i], count + 1);
// }

// // Identify duplicates and their counts
// countMap.forEach((count, value) => {
//     if (count > 1) {
//         duplicates.set(value, count);
//     }
// });

// // Output the duplicates and their counts
// console.log('Duplicates and their counts:');
// duplicates.forEach((count, value) => {
//     console.log(`${value}: ${count}`);
// });

// // Output the unique elements
// let uniqueElements = [...countMap.keys()];
// console.log('Unique elements:', uniqueElements);
// console.log('Size of unique elements:', uniqueElements.length);

//=================================================================

// Map : not store duplicate keys, store in key:pair

// let map = new Map();

// map.set(1, 'one');
// map.set(2, 'two');
// map.set(3, 'three');

// console.log(map);

//================================================================

// let str = "javascript"
// let map = new Map();

// for (let i = 0; i < str.length; i++) {

//     let count = map.get(str[i]) || 0;
//     map.set(str[i], count + 1);
// }

// console.log(map);

//====================================================================

// let str = "javascript"

// let map = new Map();

// for (let i = 0; i < str.length; i++) {
//     if (map.has(str[i])) {
//         map.set(str[i], map.get(str[i]) + 1);
//     } else {
//         map.set(str[i], 1);
//     }
// }

// // console.log(map);
// for (let [key, value] of map) {
//     console.log(`${key}: ${value}`);
// }

//=================================================================

// print maximum repeating values
// let str = "javascript"

// let map = new Map();

// for (let i = 0; i < str.length; i++) {
//     if (map.has(str[i])) {
//         map.set(str[i], map.get(str[i]) + 1);
//     } else {
//         map.set(str[i], 1);
//     }
// }

// // console.log(map);

// let max = 0;
// let maxChar = '';

// for (let [key, value] of map) {
//     if (value > max) {
//         max = value;
//         maxChar = key;
//     }
// }

// console.log(`${maxChar}: ${max}`);

//=================================================================

// sorting values
// let str = "javascript";

// let map = new Map();

// // Count the frequency of each character
// for (let char of str) {
//     map.set(char, (map.get(char) || 0) + 1);
// }

// // Convert the map entries to an array and sort by frequency (and then by character)
// let sortedEntries = [...map.entries()].sort((a, b) => {
//     if (a[1] === b[1]) {
//         // If frequencies are equal, sort alphabetically
//         return a[0].localeCompare(b[0]);
//     }
//     // Otherwise, sort by frequency in descending order
//     return b[1] - a[1];
// });

// // Reconstruct the sorted string based on frequency
// let sortedStr = '';
// for (const [char, frequency] of sortedEntries) {
//     sortedStr += char.repeat(frequency);
// }

// console.log('Reconstructed sorted string:', sortedStr);

// or
// let str = "javascript";
// let sortedStr = str.split('').sort().join('');
// console.log(sortedStr);

//or
// let str = "javascript";
// let arr = str.split(''); // Convert the string to an array of characters

// // Bubble sort implementation
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             // Swap the characters
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// let sortedStr = arr.join(''); // Convert the sorted array back to a string
// console.log(sortedStr);



//=================================================================

// target value
// let arr = [10, 100, 20, -10, 30]

// let target = 50;

// let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//     let diff = target - arr[i];
//     if (map.has(diff)) {
//         console.log(`Pair found: ${diff} and ${arr[i]}`);
//         break;
       
//     } else {
//         map.set(arr[i], 1);
//     }
// }

// console.log(map);

//================================================================
// find first positive number
// let arr = [10, 1, 2, 5, 100, 20, -10, -30]
// let set = new Set();


// // Step 1: Store positive numbers in a set
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         set.add(arr[i]);
//     }
// }

// // Step 2: Find the first missing positive number
// let missingPositive = 1;
// for (let i = 1; ; i++) {
//     if (!set.has(i)) {
//         missingPositive = i;
//         break;
//     }
// }

// console.log("First missing positive number:", missingPositive);

//  or

//================================================================

// Stock buy and sell
// let prices = [3, 4, 1, 5];

// function BuyAndSell(prices) {
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length - 1; i++) {
//         if (prices[i] < prices[i + 1]) {
//             maxProfit += prices[i + 1] - prices[i];
//         }
//     }
//     return maxProfit;
// }

// console.log(BuyAndSell(prices));

//===============================================================

// Best time to buy and sell stock

// let prices = [7, 1, 5, 3, 6, 4]

// function BuyAndSell(prices) {
//     let minPrice = prices[0];
//     let maxProfit = 0;
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < minPrice) {
//             minPrice = prices[i];
//         } else if (prices[i] - minPrice > maxProfit) {
//             maxProfit = prices[i] - minPrice;
//         }
//     }
//     return maxProfit;
// }

// console.log(BuyAndSell(prices));

//===============================================================
// sorting algorithm
//bubble sorting
// const bubbleSort = () => {
//     let arr = [10, 1, 2, 5, 100, 20, -10, -30]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     console.log(arr);
// }

// bubbleSort();


//================================================================

// 22/05/2024

// let arr = [-20, -10, 40, 5, 6, -20, 5, 10]
// // output= 51
// let maxSum = 0;
// let cursum = 0;

// for (let i = 0; i < arr.length; i++) {
//     cursum += arr[i];
//     if (cursum > maxSum) {
//         maxSum = cursum;
//     }
//     if (cursum < 0) {
//         cursum = 0;
//     }

// }
// console.log(maxSum)

//==================================================================

// selection sort : keep minimum element at first
// let arr = [5, 4, 3, 2, 1]
//[1,4,3,2,5]
//[1,2,3,4,5]

// for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[min]) {
//             min = j;
//         }
//     }
//     let temp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = temp;
// }

// console.log(arr);

//===============================================================

// sub arrays : sub sequence of elements(continuously)
// let arr = [5, 4, 3];
// [ 5 ]
// [ 5, 4 ]
// [ 5, 4, 3 ]
// [ 4 ]
// [ 4, 3 ]
// [ 3 ]

// for (let i = 0; i < arr.length; i++) {

//     for (let j = i; j < arr.length; j++) {
//         console.log(arr.slice(i, j + 1));
//     }

// }

//  or


//===============================================================

// maximum subArr sum

// let arr = [5, 4, 3, -5];
// const FindSum = (arr)=>{
//      let maxSum = 0;
//      let curSum = 0;
//      for (let i = 0; i < arr.length; i++) {
//          curSum += arr[i];
//          if (curSum > maxSum) {
//              maxSum = curSum;
//          }
//          if (curSum < 0) {
//              curSum = 0;
//          }
//      }
//      return maxSum;
// }
//  console.log(FindSum(arr));

// or
// let arr = [5, 4, 3, -5];

// const FindSum = (arr) => {
//     let sum = arr.reduce((total, cur) => total + cur)
//     return sum;
// }
// let maxSum=0
// for (let i = 0; i < arr.length; i++) {
//     let subArr = []
//     for (let j = i; j < arr.length; j++) {
//         subArr.push(arr[j]);
//         let curSum = FindSum(subArr)
//         maxSum = Math.max(maxSum, curSum);
        
//     }
    
// }
// console.log(maxSum)


//===============================================================


// Maximum sum without repeating values
// let arr = [5, 5, 4, 3, -5];

// const hasRepeating = (arr) => {
//     let set = new Set(arr);
//     return arr.length !== set.size;
// }

// const findSum = (arr) => {
//     return arr.reduce((total, cur) => total + cur, 0);
// }

// let maxSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let subArr = [];
//     for (let j = i; j < arr.length; j++) {
//         subArr.push(arr[j]);
//         if (!hasRepeating(subArr)) {
//             let curSum = findSum(subArr);
//             maxSum = Math.max(maxSum, curSum);
//         }
//     }
// }

// console.log(maxSum);  // Output the maximum sum without repeating values

// or

// Maximum sum without repeating values
// let arr = [5, 5, 4, 3, -5];

// const isUnique = (arr) => {
//     let set = new Set(arr);
//     return arr.length == set.size;
// }

// const findSum = (arr) => {
//     return arr.reduce((total, cur) => total + cur, 0);
// }

// let maxSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let subArr = [];
//     for (let j = i; j < arr.length; j++) {
//         subArr.push(arr[j]);
//         if (isUnique(subArr)) {
//             let curSum = findSum(subArr);
//             maxSum = Math.max(maxSum, curSum);
//         }
//     }
// }

// console.log(maxSum);  // Output the maximum sum without repeating values

//===============================================================

//23/05/2024
// binarySearch :
// 1. Array much be sorted
// 2. Array must be sorted in ascending order
// 3. find mid point
// 4. time complexity n log

// let arr = [10, 20, 30, 40, 50, 60, 80]
// let target = 30;
// //linear search
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//         console.log(i);
//         break;
//     }
// }

// //binary search
// let i = 0
// let j = arr.length - 1;

// while (i <= j) {
//     let mid = Math.floor((i + j) / 2);
//     if (arr[mid] == target) {
//         console.log(mid);
//         break;
//     } else if (arr[mid] < target) {
//         i = mid + 1;
//     } else if (arr[mid] > target) {
//         j = mid - 1;
//     }
// }

//================================================================

// in binary search if get target value then print otherwise print -1
// let arr = [10, 20, 30, 40, 50, 60, 80];
// let target = 70;

// let i = 0;
// let j = arr.length - 1;
// let result = -1;

// while (i <= j) {
//     let mid = Math.floor((i + j) / 2);
//     if (arr[mid] == target) {
//         result = mid;
//         break;
//     } else if (arr[mid] < target) {
//         i = mid + 1;
//     } else {
//         j = mid - 1;
//     }
// }

// console.log(result);

//===============================================================

//25/05/2024

// longest palindrome in a string using sub arrays
// let str = "zoomracecar";
// let arr = str.split("");

// const isPalindrome = (arr) => {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         if (arr[i]!= arr[j]) {
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }

// let maxLen = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         let subArr = arr.slice(i, j + 1);
//         if (isPalindrome(subArr) && subArr.length > maxLen) {
//             maxLen = subArr.length;
//         }
//     }

// }


// console.log(maxLen); //output :7 palindrome length

//-------------------------------

// longest palindrome in a string using sub arrays
// let str = "zoomracecar";

// const isPalindrome = (str) => {
//     let i = 0;
//     let j = str.length - 1;
//     while (i < j) {
//         if (str[i]!= str[j]) {
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }

// let maxLen = 0;

// for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//         let subStr = str.slice(i, j + 1);
//         if (isPalindrome(subStr) && subStr.length > maxLen) {
//             maxLen = subStr.length;
//         }
//     }
// }

// console.log(maxLen); //output :7 palindrome length

//-----------------------------------

// longest palindrome in a string using sub arrays

// function isPalindrome(subStr) {
//     let left = 0;
//     let right = subStr.length - 1;

//     while (left < right) {
//         if (subStr[left] !== subStr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }

//     return true;
// }

// function longestPalindrome(str) {
//     let maxLength = 0;
//     let longestPal = "";

//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let subStr = str.slice(i, j + 1);
//             if (isPalindrome(subStr) && subStr.length > maxLength) {
//                 maxLength = subStr.length;
//                 longestPal = subStr;
//             }
//         }
//     }

//     return longestPal;
// }

// let str = "zoomracecar";
// let result = longestPalindrome(str);
// console.log(result);  // Output: "racecar"

//-------------------------------------
// longest palindrome in a string using sub arrays
// let str = "zoomracecar";
// let temp = str.split("");

// const isPalindrome = (arr) => {
//     let hi = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[arr.length - 1 - i]) {
//             hi++;
//         }
//         if (i == arr.length - 1) {
//             if (hi / 2 == Math.floor) {
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         }

//     }
// }

// let ans = [];
// for (let i = 0; i < temp; i++){
//     let tempa = []
//     for (let j = i; j < temp.length; j++) {
//         tempa.push(temp[j]);
//         if (isPalindrome(tempa)) {
            
//             if (tempa.length > ans) {
//                 ans = tempa;
//             }

//         }
//     }

// }

// console.log(ans); //output :7 palindrome length


//-------------------------------------

//correct code for longest palindrome in a string using sub arrays
// let str = "zoomracecar";
// let temp = str.split("");

// const isPalindrome = (arr) => {
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// let ans = [];
// for (let i = 0; i < temp.length; i++){
//     let tempa = [];
//     for (let j = i; j < temp.length; j++) {
//         tempa.push(temp[j]);
//         if (isPalindrome(tempa)) {
//             if (tempa.length > ans.length) {
//                 ans = tempa.slice(); // Use slice to make a copy of tempa
//             }
//         }
//     }
// }

// console.log(ans.join('')); // Convert the array back to a string for output


//===============================================================

//  longest palindrome in a string using sub arrays, and print starting character and ending character and count of characters


// let str = "zoomracecar";

// // Function to check if a substring is a palindrome
// const isPalindrome = (s) => {
//     let len = s.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (s[i] !== s[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };

// // Function to find the longest palindromic substring
// const longestPalindromicSubstring = (str) => {
//     let maxLength = 0;
//     let start = 0;
//     let end = 0;
//     let n = str.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let substr = str.slice(i, j + 1);
//             if (isPalindrome(substr) && substr.length > maxLength) {
//                 maxLength = substr.length;
//                 start = i;
//                 end = j;
//             }
//         }
//     }

//     return {
//         substring: str.slice(start, end + 1),
//         startChar: str[start],
//         endChar: str[end],
//         count: maxLength
//     };
// };

// let result = longestPalindromicSubstring(str);
// console.log("Longest Palindromic Substring:", result.substring);
// console.log("Starting Character:", result.startChar);
// console.log("Ending Character:", result.endChar);
// console.log("Count of Characters:", result.count);



//-------------------------------------
// let str = "zoomracecar";

// // Function to check if a substring is a palindrome
// const isPalindrome = (s) => {
//     let len = s.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (s[i] !== s[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };

// // Function to find the longest palindromic substring
// const longestPalindromicSubstring = (str) => {
//     let maxLength = 0;
//     let start = 0;
//     let end = 0;
//     let n = str.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let substr = str.slice(i, j + 1);
//             if (isPalindrome(substr) && substr.length > maxLength) {
//                 maxLength = substr.length;
//                 start = i;
//                 end = j;
//             }
//         }
//     }

//     return {
//         substring: str.slice(start, end + 1),
//         startChar: str[start],
//         endChar: str[end],
//         count: maxLength
//     };
// };

// // Function to count repeating characters in a string
// const countRepeatingCharacters = (s) => {
//     let charCount = {};
//     let repeatingCount = 0;

//     // Count the occurrences of each character
//     for (let char of s) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     // Count the characters that repeat
//     for (let char in charCount) {
//         if (charCount[char] > 1) {
//             repeatingCount++;
//         }
//     }

//     return repeatingCount;
// };

// let result = longestPalindromicSubstring(str);
// let repeatingCharsCount = countRepeatingCharacters(result.substring);

// console.log("Longest Palindromic Substring:", result.substring);
// console.log("Starting Character:", result.startChar);
// console.log("Ending Character:", result.endChar);
// console.log("Count of Characters:", result.count);
// console.log("Number of Repeating Characters:", repeatingCharsCount);

//-------------------------------------------


//longest palindrome in a string using sub arrays, and print starting character and ending character and count of characters

// let str = "zoomracecar";
// let temp = str.split(" ");
// let count = 0;
// for (let i = 0; i < temp.length; i++) {
//     let tempa = [];
//     for (let j = i; j < temp.length; j++) {
//         tempa.push(temp[j]);
//         if (tempa[0] == tempa[temp.length - 1]){
//             count++;
//         }
        
//     }
// }

// console.log(count);

//-----------------------------------------

// let str = "zoomracecar";
// let temp = str.split(""); // Split into individual characters
// let count = 0;

// Function to check if a substring is a palindrome
// const isPalindrome = (arr) => {
//     let len = arr.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (arr[i] !== arr[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };

// // Set to store characters that are part of palindromic substrings
// let palindromeChars = new Set();

// for (let i = 0; i < temp.length; i++) {
//     let tempa = [];
//     for (let j = i; j < temp.length; j++) {
//         tempa.push(temp[j]);
//         if (isPalindrome(tempa)) {
//             tempa.forEach(char => palindromeChars.add(char));
//         }
//     }
// }

// count = palindromeChars.size;
// console.log(count);
//================================================================

// 27/05/2024

// Binary search : search in rotated array

// let arr = [10, 20, 30, 40, 5, 6, 7];
// const findSmall = (arr) => {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         let mid = Math.floor((i + j) / 2);
//         if (arr[mid] > arr[j]) {
//             i = mid + 1;
//         } else {
//             j = mid;
//         }
//         return i;
//     }
// }
// console.log(findSmall(arr)) //output= 4 index , small is 5

// //peak point value find
// let smallIndex = findSmall(arr)
// console.log(arr[smallIndex]) // output= 5 arr index value
// console.log(arr[smallIndex - 1]) // output= 40 arr index value, peak value


//================================================
        // class room not working code
// let arr = [10, 20, 30, 40, 4, 5, 6, 7];
// let target = 4;

// const findSmall = (arr) => {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         let mid = Math.floor((i + j) / 2);
//         if (arr[mid] > arr[j]) {
//             i = mid + 1;
//         } else {
//             j = mid;
//         }
//         return i;
//     }
// }
// let smallIndex = findSmall(arr)
// console.log(smallIndex)
// const binarySearch = (arr, i, j, target) => {
//     let mid = Math.floor((i + j) / 2);
//     if (arr[mid] == target){
//         return mid;
//     }
//     else if (arr[mid] > target){
//         j = mid - 1;
//     }
//     else if (arr[mid] < target){
//         i = mid + 1;
//     }
//     return -1;
 
// }
// let result = -1;
// result = binarySearch(arr, smallIndex, arr.length - 1, target);

// console.log(result);
// if (result !== -1) {
//     console.log(result);
// }
// else {
//     result = binarySearch(arr, 0, smallIndex - 1, target);
//     console.log(result);
// }

//--------------

// let arr = [10, 20, 30, 40, 2, 5, 6, 7];
// let target = 40;

// const findSmall = (arr) => {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         let mid = Math.floor((i + j) / 2);
//         if (arr[mid] > arr[j]) {
//             i = mid + 1;
//         } else {
//             j = mid;
//         }
//     }
//     return i;
// }

// let smallIndex = findSmall(arr);

// console.log(`Index of smallest element is : ${smallIndex}`);

// const binarySearch = (arr, i, j, target) => {
//     while (i <= j) {
//         let mid = Math.floor((i + j) / 2);
//         if (arr[mid] == target) {
//             return mid;
//         } else if (arr[mid] > target) {
//             j = mid - 1;
//         } else {
//             i = mid + 1;
//         }
//     }
//     return -1;
// }

// let result = -1;

// result = binarySearch(arr, smallIndex, arr.length - 1, target);  //for right half of binary search


// if (result === -1) {
//     result = binarySearch(arr, 0, smallIndex - 1, target);  //for left half of binary search
   
// }

// console.log(`Index of target (${target}): ${result}`);

//================================================================

//  28/05/2024

// Recursion

// print 1 to 5
// const print = (n) => {
//     // Base case
//     if (n === 0) {
//         return;
//     }
//     // Recursive case
//     print(n - 1);
//     console.log(n);
// }

// print(5);

//-------

// print 5 to 1
// const print = (n) => {
//     // Base case
//     if (n === 0) {
//         return;
//     }
//     // Recursive case
//     console.log(n);
//     print(n - 1);
// }
//  print(5);

//-----------

// Factorieal : factorial of 5
// const factorial = (n) => {
//     // Base case
//     if (n === 0) {
//         return 1;
//     }
//     // Recursive case
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));

//-----------

// sum
// const sum = (n) => {
//     // Base case
//     if (n === 0) {
//         return 0;
//     }
//     // Recursive case
//     return n + sum(n - 1);
// }

// console.log(sum(5));

// ----------------

// power of

// const pow = (n) => {
//     // Base case
//     if (n === 0) {
//         return 1;
//     }
//     // Recursive case
//     return 2 * pow(n - 1);
// }

// console.log(pow(5));

// ----------------

// power of
// const pow = (b, n) => {
//     // Base case
//     if (n === 0) {
//         return 1;
//     }
//     // Recursive case
//     return b * pow(b, n - 1);
// }

// console.log(pow(3, 5));

//================================================================

//  29/05/2024

// Revese

// let num = 4567
// const print = (n) => {
//         // Base case
//         if (n === 0) {
//             return;
//         }
//         // Recursive case
//         console.log(n % 10);
//         n= Math.floor(n / 10);
//         // print(Math.floor(n / 10));
//         print(n);
// }

// print(num);

//--------------

// array reverse

// const printArray = (arr) => {
//         // Base case
//         if (arr.length === 0) {
//             return;
//         }
//         // Recursive case
//         console.log(arr[arr.length - 1]);
//         arr.pop();
//         printArray(arr);
// }

// let arr = [1, 2, 3, 4, 5];

// printArray(arr);

// Or

// const printArray = (arr, n, i) => {
//         // Base case
//         if (i === n) {
//             return;
//         }
//         // Recursive case
//         console.log(arr[i]);
//         printArray(arr, n, i + 1);
// }

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length

// printArray(arr, n, 0);

//---------------
// Reverse array

// const printArray = (arr, n, i) => {
//         // Base case
//         if (i === n) {
//             return;
//         }
//         // Recursive case
//         printArray(arr, n, i + 1);
//         console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// printArray(arr, n, 0);

//-----------------------

// Fibonacci

// const fib = (n) => {
//         // Base case
//         if (n <= 1) {
//             return n;
//         }
//         // Recursive case
//         return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(8));

//--------------------------
// possibilities
// 1-step & 2-step
// const stair = (n) => {
//         // Base case
//         if (n <= 1) {
//             return 1;
//         }
//         // Recursive case
//         return stair(n - 1) + stair(n - 2);
// }

// console.log(stair(5));  // output : 8

//---------------------
// possibilities
// 1-step & 2-step & 3-step
// const stair = (n) => {
//         // Base case
//         if (n < 0) return 0; // Handle negative steps
//         if (n === 0) return 1; // One way to stay at the start
//         if (n === 1) return 1; // One way to take a single step
//         // Recursive case
//         return stair(n - 1) + stair(n - 2) + stair(n - 3);
// }

// console.log(stair(5));  // output : 13

//==========================================================================

// 30/05/2024

// Stack

// class Stack {
//         constructor(size) {
//                 this.items = new Array(size);
//                 this.index = -1; // index of first item in array starting from zero
//                 this.size = size;
//         }
//         push(val) {
//                 if (this.index < this.size - 1) {
//                         this.index++;
//                         this.items[this.index] = val;
//                         // return true;
//                 }
//                 else {
//                         // return false;
//                         console.log("Stack Overflow");
//                 }
//         }
//         // pop() {
//         //         if (this.index >= 0) {
//         //                 let val = this.items[this.index];
//         //                 this.items[this.index] = null;
//         //                 this.index--;
//         //                 return val;
//         //         }
//         //         else {
//         //                 console.log("Stack Underflow");
//         //         }
//         // }
//         pop() {
//                 if (this.index != -1) {
//                         let val = this.items[this.index];
//                         this.items[this.index--] = -1;
//                         return val;
//                 }
//                 else {
//                         console.log("Stack Underflow");
//                 }
                        
//         }
//         peek() {
//                 if (this.index != -1) {
//                         let val = this.items[this.index];
//                         return val;
//                 }
//         }
//         isEmpty() {
//                 if (this.index == -1) {
//                         return true;
//                 }
//                 else {
//                         return false;
//                 }
//         }
//         printStack() {
//                 for (let i = this.index; i >= 0; i--) {
//                         console.log(this.items[i]);
//                 }
//         }
//         printStackReverse() {
//                 for (let i = 0; i <= this.index; i++) {
//                         console.log(this.items[i]);
//                 }
//         }
//         length() {
//                 return this.index + 1;
//         }
               
// }

// let stk = new Stack(5);

// stk.push(1);

// stk.push(2);

// stk.push(3);

// stk.push(4);

// stk.push(5);

// stk.push(6);
// stk.pop();
// console.log(stk);

//=================================================================================

// 31/05/2024

// revesre string using stack

// let str = 'java'
// let stack = [];

// for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
// }

// for (let i = 0; i < str.length; i++) {
//         console.log(stack.pop());
//         // console.log("pop");  // testing
        
//}



//================================================================================

// let str = "j#aa#v#aa##script##"
// // output = "ascri"

//  processString =(s) => {
//         let stack = [];
//         for (let char of s) {
//             if (char === '#') {
//                 if (stack.length > 0) {
//                     stack.pop();
//                 }
//             } else {
//                 stack.push(char);
//             }
//         }
//         return stack.join("");
//     }
    
//     // Test the function
//     let inputStr = "j#aa#v#aa##script##";
//     let output = processString(inputStr);
//     console.log(output);  // Output should be "ascri"

//---------------------------

// class Stack {
//     constructor(size) {
//         this.items = new Array(size);
//         this.index = -1;
//         this.size = size;
//     }
//     push(val) {
//         if (this.index < this.size - 1) {
//             this.index++;
//             this.items[this.index] = val;
//         } else {
//             console.log("Stack Overflow");
//         }
//     }
//     pop() {
//         if (this.index != -1) {
//             let val = this.items[this.index];
//             this.items[this.index--] = -1;
//             return val;
//         } else {
//             console.log("Stack Underflow");
//         }
//     }
//     peek() {
//         if (this.index != -1) {
//             let val = this.items[this.index];
//             return val;
//         }
//     }
//     isEmpty() {
//         if (this.index == -1) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     printStack() {
//         for (let i = this.index; i >= 0; i--) {
//             console.log(this.items[i]);
//         }
//     }
//     printStackReverse() {
//         for (let i = 0; i <= this.index; i++) {
//             console.log(this.items[i]);
//         }
//     }
//     length() {
//         return this.index + 1;
//     }
// }

// const processString =(s) => {
//     let stack = new Stack(s.length);
//     for (let char of s) {
//         if (char === '#') {
//             if (stack.length() > 0) {
//                 stack.pop();
//             }
//         } else {
//             stack.push(char);
//         }
//     }
//     return stack.items.join("")
// // return stack.join("");
 
// }

// // Test the function
// let str = "j#aa#v#aa##script##";
// let output = processString(str);
// console.log(output);  // Output should be "ascri"




//=================================================================================
    
// 04/06/2024

// class Stack {
//     constructor(size) {
//       this.string = new Array(size);
//       this.index = -1;
//       this.size = size;
//     }
//     push(value) {
//       this.string[this.index++];
//       this.string[this.index] = value;
//     }
//     pop() {
//       let value = this.string[this.index];
//       this.string[this.index--] = -1;
//       return value;
//     }
//     peek() {
//       if (this.index != -1) {
//         let value = this.string[this.index];
//         return value;
//       }
//     }
//     length() {
//       return this.index + 1;
//     }
//     isEmpty() {
//       if (this.index == -1) {
//         return true;
//       }
//       else {
//         return false;
//       }
//     }
//   }
  
  
  
//   // const isValid = (s) => {
//   //     const stack = new Stack(s.length);
    
//   //     for (let i = 0; i < s.length; i++) {
    
//   //       if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//   //         stack.push(s[i]);
//   //       }
//   //       else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
//   //         if (stack.isEmpty(stack)) {
//   //           return false;
//   //         }
    
//   //         const top = stack.pop();
//   //         if (
//   //           (s[i] === ")" && top !== "(") ||
//   //           (s[i] === "]" && top !== "[") ||
//   //           (s[i] === "}" && top !== "{")
//   //         ) {
//   //           return false;
//   //         }
//   //       }
//   //     }
    
//   //     return stack.isEmpty(stack);
//   //   }
  
//   const isValid = (s) => {
//     let stk = new Stack(s.length);
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//         stk.push(s[i]);
//       }
//       else {
//         if (!stk.isEmpty()) {
//           if (stk.peek() == "(" && s[i] == ")" || stk.peek() == "{" && s[i] === "}" || stk.peek() == "[" && s[i] === "]") {
//             stk.pop();
//           }
//           else {
//             return false;
//           }
//         }
//         else {
//           return false;
//         }
       
//       }
//     }
//     if (stk.isEmpty()) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
    
    
//     const string1 = "([{}])";
//     console.log(isValid(string1));

//================================================================

// 05/06/2024

// Queue

// class Queue {
//   constructor(size) {
//     this.items = new Array(size);
//     this.size = size;
//     this.front = -1;
//     this.rear = -1;
//   }
//   enqueue(value) {
//     if (this.front == -1 && this.rear == -1) {
//       this.front++;
//       this.rear++;
//       this.items[this.rear] = value;
//     }
//     else {
//       if (this.rear < this.size - 1) {
//         this.rear++;
//         this.items[this.rear] = value;
//       } else {
//         console.log("Queue Overflow");
//       }
//     }

//   }
//   dequeue() {
//     if (this.front != -1) {
//       if (this.front == this.rear) {
//         this.items[this.front] = -1;
//         this.front = -1;
//         this.rear = -1;
//       }
//       else {
//         this.items[this.front] = -1;
//         this.front++;
//       }
//     }
//     else {
//       console.log("Queue Underflow");
//     }
//   }
//   getFront() {
//     if (this.front != -1) {
//       return this.items[this.front];
//     }
//     else {
//       console.log("Queue Underflow");
//     }
//   }
//   getRear() {
//     if (this.rear != -1) {
//       return this.items[this.rear];
//     }
//     else {
//       console.log("Queue Underflow");
//     }
//   }
//   isEmpty() {
//     if (this.front == -1 && this.rear == -1) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
//   getSize() {
//     return this.rear - this.front + 1;
//   }
// }

// const queue = new Queue(5);

// queue.enqueue(1);

// queue.enqueue(2);

// queue.enqueue(3);

// queue.enqueue(4);

// queue.enqueue(5);

// queue.enqueue(6);
// console.log(queue);

//============================================================================

// 06/06/2024

// // Linked list

// class Node {
//   constructor(data) {
//     this.value = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     // this.tail = null;
//     // this.length = 0;
//   }
//   addToTail(data) {
//     let node = new Node(data);
//     if (this.head === null) {
//       this.head = node;
//     }
//     else {
//       let crHead = this.head
//       while (crHead.next!== null) {
//         crHead = crHead.next;
//       }
//       crHead.next = node;
//     }
//   }
//   print() {
//     let crHead = this.head;
//     while (crHead!== null) {
//       console.log(crHead.data);
//       crHead = crHead.next;
//     }
//   }
//   getSize() {
//     let crHead = this.head;
//     let length = 0;
//     while (crHead!== null) {
//       length++;
//       crHead = crHead.next;
//     }
//     return length;
//   }
//   isEmpty() {
//     // if (this.head === null) {
//     //   return true;
//     // }
//     // else {
//     //   return false;
//     // }
//     let size = this.getSize();
//     if (size === 0) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }

//   addToHead(data) {
//     let node = new Node(data);
//     if (this.head === null) {
//       this.head = node;
//     }
//     else {
//       node.next = this.head;
//       this.head = node;
//     }
//   }

//   removeFromHead() {
//     if (this.head === null) {
//       return null;
//     }
//     else {
//       let node = this.head;
//       this.head = this.head.next;
//       return node;
//     }
//   }
//   removeFromTail() {
//     if (this.head === null) {
//       return null;
//     }
//     else {
//       let crHead = this.head;
//       while (crHead.next.next!== null) {
//         crHead = crHead.next;
//       }
//       // let node = crHead.next;
//       crHead.next = null;
//       // return node;
//     }
//   }
//   removeAtAnyPosition(position) {
//     let crHead = this.head;
//     for (let i = 1; i < position - 1; i++) {
//       crHead = crHead.next;
//     }
//     // console.log(crHead.data);
//     crHead.next = crHead.next.next
//   }
//   insertAtAnyPosition(position, data) {
//     let node = new Node(data);
//     let crHead = this.head;
//     for (let i = 1; i < position; i++) {
//       crHead = crHead.next;
//     }
//     node.next = crHead.next;
//     crHead.next = node;
//   }
  
//   merge(list2) {
//     if (this.head == null) {
//       this.head = list2.head;
//     }
//     else {
//       let crHead = this.head;
//       while (crHead.next!== null) {
//         crHead = crHead.next;
//       }
//       crHead.next = list2.head;
//     }
//   }

//   revesrePrint(data) {
//     let crHead = this.head;
//     while (crHead!== null) {
//       console.log(crHead.data);
//       crHead = crHead.next;
//     }
//   }
// }

// const list1 = new LinkedList();

// list1.addToTail(1);

// list1.addToTail(2);

// list1.addToTail(3);

// list1.addToTail(4);

// list1.addToTail(5);

// console.log(list1);
// list1.insertAtAnyPosition(1, 6)

// console.log(list1);
// console.log(list1.print());

// chat gpt

// class Node {
//   constructor(data) {
//     this.value = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addToTail(data) {
//     let node = new Node(data);
//     if (this.head === null) {
//       this.head = node;
//     } else {
//       let crHead = this.head;
//       while (crHead.next !== null) {
//         crHead = crHead.next;
//       }
//       crHead.next = node;
//     }
//   }

//   print() {
//     let crHead = this.head;
//     while (crHead !== null) {
//       console.log(crHead.value); // corrected to crHead.value
//       crHead = crHead.next;
//     }
//   }

//   getSize() {
//     let crHead = this.head;
//     let length = 0;
//     while (crHead !== null) {
//       length++;
//       crHead = crHead.next;
//     }
//     return length;
//   }

//   isEmpty() {
//     let size = this.getSize();
//     return size === 0;
//   }

//   addToHead(data) {
//     let node = new Node(data);
//     if (this.head === null) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//   }

//   removeFromHead() {
//     if (this.head === null) {
//       return null;
//     } else {
//       let node = this.head;
//       this.head = this.head.next;
//       return node;
//     }
//   }

//   removeFromTail() {
//     if (this.head === null) {
//       return null;
//     } else if (this.head.next === null) {
//       let node = this.head;
//       this.head = null;
//       return node;
//     } else {
//       let crHead = this.head;
//       while (crHead.next.next !== null) {
//         crHead = crHead.next;
//       }
//       let node = crHead.next;
//       crHead.next = null;
//       return node;
//     }
//   }

//   removeAtAnyPosition(position) {
//     if (position <= 0 || this.head === null) return null;
//     if (position === 1) return this.removeFromHead();
    
//     let crHead = this.head;
//     for (let i = 1; i < position - 1 && crHead.next !== null; i++) {
//       crHead = crHead.next;
//     }
//     if (crHead.next === null) return null;

//     let node = crHead.next;
//     crHead.next = crHead.next.next;
//     return node;
//   }

//   insertAtAnyPosition(position, data) {
//     if (position <= 0) return;
//     let node = new Node(data);

//     if (position === 1) {
//       node.next = this.head;
//       this.head = node;
//       return;
//     }

//     let crHead = this.head;
//     for (let i = 1; i < position - 1 && crHead !== null; i++) {
//       crHead = crHead.next;
//     }

//     if (crHead === null) return;

//     node.next = crHead.next;
//     crHead.next = node;
//   }

//   merge(list2) {
//     if (this.head == null) {
//       this.head = list2.head;
//     } else {
//       let crHead = this.head;
//       while (crHead.next !== null) {
//         crHead = crHead.next;
//       }
//       crHead.next = list2.head;
//     }
//   }

//   reversePrint() {
//     const printReverse = (node) => {
//       if (node === null) return;
//       printReverse(node.next);
//       console.log(node.value);
//     }
//     printReverse(this.head);
//   }
// }

// const list1 = new LinkedList();

// list1.addToTail(1);
// list1.addToTail(2);
// list1.addToTail(3);
// list1.addToTail(4);
// list1.addToTail(5);

// console.log(list1);
// list1.insertAtAnyPosition(2, 6)

// console.log(list1);
// list1.print();
// list1.reversePrint();
// console.log(list1);

//-----------------------------


// // chatGPT
// class Node {
//   constructor(data) {
//     this.value = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addToTail(data) {
//     let node = new Node(data);
//     if (this.head === null) {
//       this.head = node;
//     } else {
//       let crHead = this.head;
//       while (crHead.next !== null) {
//         crHead = crHead.next;
//       }
//       crHead.next = node;
//     }
//   }

//   print() {
//     let crHead = this.head;
//     while (crHead !== null) {
//       console.log(crHead.value); // corrected to crHead.value
//       crHead = crHead.next;
//     }
//   }

//   getSize() {
//     let crHead = this.head;
//     let length = 0;
//     while (crHead !== null) {
//       length++;
//       crHead = crHead.next;
//     }
//     return length;
//   }

//   isEmpty() {
//     let size = this.getSize();
//     return size === 0;
//   }

//   addToHead(data) {
//     let node = new Node(data);
//     if (this.head === null) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//   }

//   removeFromHead() {
//     if (this.head === null) {
//       return null;
//     } else {
//       let crHead = this.head;
//       this.head = this.head.next;
//       return crHead;
//     }
//   }

//   removeFromTail() {
//     if (this.head === null) {
//       return null;
//     } else if (this.head.next === null) {
//       let node = this.head;
//       this.head = null;
//       return node;
//     } else {
//       let crHead = this.head;
//       while (crHead.next.next !== null) {
//         crHead = crHead.next;
//       }
//       let node = crHead.next;
//       crHead.next = null;
//       return node;
//     }
//   }

//   removeAtAnyPosition(position) {
//     if (position <= 0 || this.head === null) return null;
//     if (position === 1) return this.removeFromHead();
    
//     let crHead = this.head;
//     for (let i = 1; i < position - 1 && crHead.next !== null; i++) {
//       crHead = crHead.next;
//     }
//     if (crHead.next === null) return null;

//     let node = crHead.next;
//     crHead.next = crHead.next.next;
//     return node;
//   }

//   insertAtAnyPosition(position, data) {
//     if (position <= 0) return;
//     let node = new Node(data);

//     if (position === 1) {
//       node.next = this.head;
//       this.head = node;
//       return;
//     }

//     let crHead = this.head;
//     for (let i = 1; i < position - 1 && crHead !== null; i++) {
//       crHead = crHead.next;
//     }

//     if (crHead === null) return;

//     node.next = crHead.next;
//     crHead.next = node;
//   }

//   merge(list2) {
//     if (this.head == null) {
//       this.head = list2.head;
//     } else {
//       let crHead = this.head;
//       while (crHead.next !== null) {
//         crHead = crHead.next;
//       }
//       crHead.next = list2.head;
//     }
//   }

//   reversePrint() {
//     const printReverse = (node) => {
//       if (node === null) return;
//       printReverse(node.next);
//       console.log(node.value);
//     }
//     printReverse(this.head);
//   }
// }

// // Example usage:
// const list1 = new LinkedList();
// list1.addToTail(1);
// list1.addToTail(2);
// list1.addToTail(3);
// list1.addToTail(4);
// list1.addToTail(5);

// console.log("List after adding elements to the tail:");
// list1.print();

// list1.insertAtAnyPosition(2, 6);
// console.log("List after inserting 6 at position 2:");
// list1.print();

// list1.removeFromHead();
// console.log("List after removing the head:");
// list1.print();

// list1.removeFromTail();
// console.log("List after removing the tail:");
// list1.print();

// list1.removeAtAnyPosition(2);
// console.log("List after removing the element at position 2:");
// list1.print();

// console.log("Reversed print:");
// list1.reversePrint();

//================================================================
// 10/06/2024 exam

// merge two sorted arrary
// let arr1 =[1,3,5,7,9]

// let arr2 = [2,4,6,8,10]

// let arr3 = []

// let i = 0

// let j = 0

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         arr3.push(arr1[i])
//         i++
//     }else{
//         arr3.push(arr2[j])
//         j++
//     }
// }

// while(i<arr1.length){
//     arr3.push(arr1[i])
//     i++
// }

// while(j<arr2.length){
//     arr3.push(arr2[j])
//     j++
// }

// console.log(arr3)

//----------------------------------------------------------------
// Function to merge two sorted arrays using stacks
// function mergeSortedArrays(arr1, arr2) {
//   // Create stacks for the two arrays
//   let stack1 = [];
//   let stack2 = [];

//   // Fill the stacks with array elements (reversed)
//   for (let i = arr1.length - 1; i >= 0; i--) {
//       stack1.push(arr1[i]);
//   }
//   for (let i = arr2.length - 1; i >= 0; i--) {
//       stack2.push(arr2[i]);
//   }

//   let mergedArray = [];

//   // Merge the arrays by comparing the top elements of the stacks
//   while (stack1.length > 0 && stack2.length > 0) {
//       if (stack1[stack1.length - 1] < stack2[stack2.length - 1]) {
//           mergedArray.push(stack1.pop());
//       } else {
//           mergedArray.push(stack2.pop());
//       }
//   }

//   // If there are remaining elements in stack1, add them to mergedArray
//   while (stack1.length > 0) {
//       mergedArray.push(stack1.pop());
//   }

//   // If there are remaining elements in stack2, add them to mergedArray
//   while (stack2.length > 0) {
//       mergedArray.push(stack2.pop());
//   }

//   return mergedArray;
// }

// let arr1 = [1, 3, 5, 7, 9];
// let arr2 = [2, 4, 6, 8, 10];

// let mergedArray = mergeSortedArrays(arr1, arr2);

// console.log(mergedArray);

//----------------------------------------------------------------

// Node class for Linked List
// class ListNode {
//   constructor(value) {
//       this.value = value;
//       this.next = null;
//   }
// }

// // LinkedList class
// class LinkedList {
//   constructor() {
//       this.head = null;
//       this.tail = null;
//   }

//   // Method to add a node to the linked list
//   append(value) {
//       const newNode = new ListNode(value);
//       if (this.tail) {
//           this.tail.next = newNode;
//           this.tail = newNode;
//       } else {
//           this.head = newNode;
//           this.tail = newNode;
//       }
//   }

//   // Method to convert linked list to array
//   toArray() {
//       const result = [];
//       let current = this.head;
//       while (current) {
//           result.push(current.value);
//           current = current.next;
//       }
//       return result;
//   }
// }

// let arr1 = [1, 3, 5, 7, 9];
// let arr2 = [2, 4, 6, 8, 10];

// let linkedList = new LinkedList();

// let i = 0;
// let j = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//       linkedList.append(arr1[i]);
//       i++;
//   } else {
//       linkedList.append(arr2[j]);
//       j++;
//   }
// }

// while (i < arr1.length) {
//   linkedList.append(arr1[i]);
//   i++;
// }

// while (j < arr2.length) {
//   linkedList.append(arr2[j]);
//   j++;
// }

// console.log(linkedList.toArray());

//----------------------------------------------------------------
// Queue class
// class Queue {
//   constructor() {
//       this.items = [];
//   }

//   // Method to add an element to the queue
//   enqueue(element) {
//       this.items.push(element);
//   }

//   // Method to remove an element from the queue
//   dequeue() {
//       if (this.isEmpty()) {
//           return "Underflow";
//       }
//       return this.items.shift();
//   }

//   // Method to check if the queue is empty
//   isEmpty() {
//       return this.items.length === 0;
//   }

//   // Method to get the front element of the queue
//   front() {
//       if (this.isEmpty()) {
//           return "No elements in Queue";
//       }
//       return this.items[0];
//   }
// }

// // Function to merge two sorted arrays using queues
// function mergeSortedArrays(arr1, arr2) {
//   let queue1 = new Queue();
//   let queue2 = new Queue();

//   // Fill the queues with array elements
//   for (let i = 0; i < arr1.length; i++) {
//       queue1.enqueue(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//       queue2.enqueue(arr2[i]);
//   }

//   let mergedArray = [];

//   // Merge the arrays by comparing the front elements of the queues
//   while (!queue1.isEmpty() && !queue2.isEmpty()) {
//       if (queue1.front() < queue2.front()) {
//           mergedArray.push(queue1.dequeue());
//       } else {
//           mergedArray.push(queue2.dequeue());
//       }
//   }

//   // If there are remaining elements in queue1, add them to mergedArray
//   while (!queue1.isEmpty()) {
//       mergedArray.push(queue1.dequeue());
//   }

//   // If there are remaining elements in queue2, add them to mergedArray
//   while (!queue2.isEmpty()) {
//       mergedArray.push(queue2.dequeue());
//   }

//   return mergedArray;
// }

// let arr1 = [1, 3, 5, 7, 9];
// let arr2 = [2, 4, 6, 8, 10];

// let mergedArray = mergeSortedArrays(arr1, arr2);

// console.log(mergedArray);

//----------------------------------------------------------------

// 2D array n print

// Stack class
// class Stack {
//   constructor() {
//       this.items = [];
//   }

//   // Method to add an element to the stack
//   push(element) {
//       this.items.push(element);
//   }

//   // Method to remove an element from the stack
//   pop() {
//       if (this.isEmpty()) {
//           return "Underflow";
//       }
//       return this.items.pop();
//   }

//   // Method to check if the stack is empty
//   isEmpty() {
//       return this.items.length === 0;
//   }
// }

// // Function to print a 2D array using a stack
// function print2DArrayUsingStack(arr) {
//   let stack = new Stack();

//   // Push all elements of the 2D array into the stack
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//           stack.push(arr[i][j]);
//       }
//   }

//   // Pop and print each element from the stack
//   while (!stack.isEmpty()) {
//       console.log(stack.pop());
//   }
// }

// let arr2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// print2DArrayUsingStack(arr2D);

//----------------------------------------------------------------
// Queue class
// class Queue {
//   constructor() {
//       this.items = [];
//   }

//   // Method to add an element to the queue
//   enqueue(element) {
//       this.items.push(element);
//   }

//   // Method to remove an element from the queue
//   dequeue() {
//       if (this.isEmpty()) {
//           return "Underflow";
//       }
//       return this.items.shift();
//   }

//   // Method to check if the queue is empty
//   isEmpty() {
//       return this.items.length === 0;
//   }
// }

// // Function to print a 2D array using a queue
// function print2DArrayUsingQueue(arr) {
//   let queue = new Queue();

//   // Enqueue all elements of the 2D array into the queue
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//           queue.enqueue(arr[i][j]);
//       }
//   }

//   // Dequeue and print each element from the queue
//   while (!queue.isEmpty()) {
//       console.log(queue.dequeue());
//   }
// }

// let arr2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// print2DArrayUsingQueue(arr2D);

//----------------------------------------------------------------

// Node class for Linked List
// class ListNode {
//   constructor(value) {
//       this.value = value;
//       this.next = null;
//   }
// }

// // LinkedList class
// class LinkedList {
//   constructor() {
//       this.head = null;
//       this.tail = null;
//   }

//   // Method to add a node to the linked list
//   append(value) {
//       const newNode = new ListNode(value);
//       if (this.tail) {
//           this.tail.next = newNode;
//           this.tail = newNode;
//       } else {
//           this.head = newNode;
//           this.tail = newNode;
//       }
//   }

//   // Method to print the linked list
//   print() {
//       let current = this.head;
//       while (current) {
//           console.log(current.value);
//           current = current.next;
//       }
//   }
// }

// // Function to print a 2D array using a linked list
// function print2DArrayUsingLinkedList(arr) {
//   let linkedList = new LinkedList();

//   // Append all elements of the 2D array into the linked list
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//           linkedList.append(arr[i][j]);
//       }
//   }

//   // Print the linked list
//   linkedList.print();
// }

// let arr2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// print2DArrayUsingLinkedList(arr2D);

//============================================================================

// Binary search

// Function to perform binary search using a stack
// function binarySearchUsingStack(arr, target) {
//   let stack = [];

//   let start = 0;
//   let end = arr.length - 1;

//   stack.push({ start: start, end: end });

//   while (stack.length > 0) {
//       let { start, end } = stack.pop();

//       if (start > end) {
//           continue;
//       }

//       let mid = Math.floor((start + end) / 2);

//       if (arr[mid] === target) {
//           return mid;
//       }

//       if (arr[mid] > target) {
//           stack.push({ start: start, end: mid - 1 });
//       } else {
//           stack.push({ start: mid + 1, end: end });
//       }
//   }

//   return -1; // Target not found
// }

// let arr = [1, 3, 5, 7, 9, 11, 13];
// let target = 7;

// console.log(binarySearchUsingStack(arr, target)); // Output: 3

//----------------------------------------------------------------
// Queue class
// class Queue {
//   constructor() {
//       this.items = [];
//   }

//   enqueue(element) {
//       this.items.push(element);
//   }

//   dequeue() {
//       if (this.isEmpty()) {
//           return "Underflow";
//       }
//       return this.items.shift();
//   }

//   isEmpty() {
//       return this.items.length === 0;
//   }
// }

// // Function to perform binary search using a queue
// function binarySearchUsingQueue(arr, target) {
//   let queue = new Queue();

//   let start = 0;
//   let end = arr.length - 1;

//   queue.enqueue({ start: start, end: end });

//   while (!queue.isEmpty()) {
//       let { start, end } = queue.dequeue();

//       if (start > end) {
//           continue;
//       }

//       let mid = Math.floor((start + end) / 2);

//       if (arr[mid] === target) {
//           return mid;
//       }

//       if (arr[mid] > target) {
//           queue.enqueue({ start: start, end: mid - 1 });
//       } else {
//           queue.enqueue({ start: mid + 1, end: end });
//       }
//   }

//   return -1; // Target not found
// }

// let arr = [1, 3, 5, 7, 9, 11, 13];
// let target = 7;

// console.log(binarySearchUsingQueue(arr, target)); // Output: 3

//----------------------------------------------------------------
// Node class for Linked List
// class ListNode {
//   constructor(start, end) {
//       this.start = start;
//       this.end = end;
//       this.next = null;
//   }
// }

// // LinkedList class
// class LinkedList {
//   constructor() {
//       this.head = null;
//       this.tail = null;
//   }

//   append(start, end) {
//       const newNode = new ListNode(start, end);
//       if (this.tail) {
//           this.tail.next = newNode;
//           this.tail = newNode;
//       } else {
//           this.head = newNode;
//           this.tail = newNode;
//       }
//   }

//   removeHead() {
//       if (this.head) {
//           const value = { start: this.head.start, end: this.head.end };
//           this.head = this.head.next;
//           if (!this.head) {
//               this.tail = null;
//           }
//           return value;
//       }
//       return null;
//   }

//   isEmpty() {
//       return this.head === null;
//   }
// }

// // Function to perform binary search using a linked list
// function binarySearchUsingLinkedList(arr, target) {
//   let list = new LinkedList();

//   let start = 0;
//   let end = arr.length - 1;

//   list.append(start, end);

//   while (!list.isEmpty()) {
//       let { start, end } = list.removeHead();

//       if (start > end) {
//           continue;
//       }

//       let mid = Math.floor((start + end) / 2);

//       if (arr[mid] === target) {
//           return mid;
//       }

//       if (arr[mid] > target) {
//           list.append(start, mid - 1);
//       } else {
//           list.append(mid + 1, end);
//       }
//   }

//   return -1; // Target not found
// }

// let arr = [1, 3, 5, 7, 9, 11, 13];
// let target = 7;

// console.log(binarySearchUsingLinkedList(arr, target)); // Output: 3

//================================================================





