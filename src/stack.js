class Stack {
    constructor() {
        this.array = [];
    }
    push(element) {
        this.array.push(element);
    }
    pop() {
       return this.array.pop();
    }
}


let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());