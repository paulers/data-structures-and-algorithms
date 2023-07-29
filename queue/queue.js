/*
    QUEUE IMPLEMENTATION
    Queues are First In First Out (FIFO)
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null; // remove from here,
        this.tail = null; // we add things here, since things go to the back of the queue
    }

    isEmpty() {
        return !this.head;
    }

    peek() {
        return this.head?.data;
    }

    add(data) {
        // we want to add to the tail
        const node = new Node(data);

        // if tail exists, set its 'next' property to the new node to create a link
        if (!!(this.tail)) {
            this.tail.next = node;
        }
        // then, overwrite the existing tail with the new node
        this.tail = node;

        // in the case where a head does not exist (meaning, empty queue), set the head to the new node
        if (!this.head) {
            this.head = node;
        }
    }

    remove() {
        // we want to remove from the head, since FIFO
        const data = this.head.data;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        return data;
    }
}

const queue = new Queue();
const isEmpty = queue.isEmpty();
console.log(isEmpty);
queue.add("data1");
queue.add("data2");
queue.add("data3");
const item1 = queue.peek(); // should be data1
console.log(item1);
queue.remove();
const item2 = queue.peek(); // should be data2
console.log(item2)
queue.remove();
const item3 = queue.peek(); // should be data3
console.log(item3);