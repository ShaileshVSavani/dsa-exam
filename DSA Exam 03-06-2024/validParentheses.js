class Stack {
  constructor(size) {
    this.string = new Array(size);
    this.index = -1;
    this.size = size;
  }
  push(value) {
    this.string[this.index++];
    this.string[this.index] = value;
  }
  pop() {
    let value = this.string[this.index];
    this.string[this.index--] = -1;
    return value;
  }
  peek() {
    if (this.index != -1) {
      let value = this.string[this.index];
      return value;
    }
  }
  length() {
    return this.index + 1;
  }
  isEmpty() {
    if (this.index == -1) {
      return true;
    }
    else {
      return false;
    }
  }
}



const isValid = (s) => {
    const stack = new Stack(s.length);
  
    for (let i = 0; i < s.length; i++) {
  
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        stack.push(s[i]);
      } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
        if (stack.isEmpty(stack)) {
          return false;
        }
  
        const top = stack.pop();
        if (
          (s[i] === ")" && top !== "(") ||
          (s[i] === "]" && top !== "[") ||
          (s[i] === "}" && top !== "{")
        ) {
          return false;
        }
      }
    }
  
    return stack.isEmpty(stack);
  }
  
  
  const string1 = "([{})";
  console.log(isValid(string1));