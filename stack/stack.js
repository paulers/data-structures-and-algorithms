/*
    STACK IMPLEMENTATION
    Stacks are Last In First Out (LIFO)
*/

class Node {
    constructor(data) {
        this.data = data;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return !this.top;
    }

    peek() {
        return this.top?.data;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        if (!this.top) return null;
        const data = this.top.data;
        this.top = this.top.next;
        return data;
    }
}

const stack = new Stack();
stack.push("data1");
stack.push("data2");
stack.push("data3");
const peek = stack.peek(); // should show data3
console.log(peek);
const item1 = stack.pop(); // should show data3
console.log(item1);
stack.pop();
const item3 = stack.pop(); // should show data1
console.log(item3);