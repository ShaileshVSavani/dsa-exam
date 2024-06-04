class Stack{
    constructor(size) {
        this.string = new Array(size);
        this.index = -1;
        this.size = size;
    }
    push(value) { 
        if (this.index < this.size - 1) {
            this.index++;
            this.string[this.index] = value;
        }
        else {
            console.log("Stack is overflowing")
        }
    }
    pop() { 
        if (this.index != -1) { 
            let value = this.string[this.index];
            this.string[this.index--]= -1;
            return value;
        }
        else {
            console.log("Stack is underflow")
        }
    }
    peek() { 
        if (this.index != -1) { 
            let value = this.string[this.index];
            return value;
        }
    }
    isEmpty() { 
        if (this.index != -1) {
            return false;
        }
        else { 
            return true;
        }
    }
    length() { 
        return this.index + 1;
    }
}

const outputString = (s) => {
    let stk = new Stack(s.length);
    for (let char of s) { 
        if (char == '#') {
            if (stk.length() > 0) { 
                stk.pop();
            }
        }
        else {
            stk.push(char);
        }
    }
    return stk.string.join("");
}

let str = "jj#a#aa#vv#aaa##scriptpt##";
  
console.log(outputString(str))  // Output : "javascript"