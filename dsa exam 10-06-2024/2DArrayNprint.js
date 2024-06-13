
//2D array n print


class Stack {
  constructor() {
      this.items = [];
  }


  push(element) {
      this.items.push(element);
  }


  pop() {
      if (this.isEmpty()) {
          return "Underflow";
      }
      return this.items.pop();
  }

 
  isEmpty() {
      return this.items.length === 0;
  }
}

k
function print2DArrayUsingStack(arr) {
  let stack = new Stack();

 
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          stack.push(arr[i][j]);
      }
  }


  while (!stack.isEmpty()) {
      console.log(stack.pop());
  }
}

let arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

print2DArrayUsingStack(arr2D);