/*
    LINKED LIST IMPLEMENTATION
    This linked list implementation is unidirectional. Creating a doubly-linked list requires adding a 'previous' pointer to each node.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    find(item) {
        // set the current node to the head to begin with (start of the LL)
        let currNode = this.head;
        // while the current node's value is not what we're looking for
        while (currNode.value != item) {
            // set the current node to the next node in line
            currNode = currNode.next;
        }
        // return the current node when the loop above exits
        return currNode;
    }

    findPrevious(item) {
        // start at the head
        let currNode = this.head;
        while (currNode?.next?.value != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(newValue, item) {
        // create a new node and initialize it with the value
        const newNode = new Node(newValue);
        // find the item after which we want to insert this new node
        const current = this.find(item);
        // set the new node's 'next' to the above node's 'next'
        newNode.next = current.next;
        // set the 'after' node's next to the new node
        current.next = newNode;
    }

    remove(item) {
        // find node before the node we want to remove
        // replace the .next on that preceding node to .next from the node we're removing
        const prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next; // <- set the preceding node's next to next/next node (jump over 1 step)
        }
    }

    list() {
        let currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.value);
            currNode = currNode.next;
        }
    }
}

let cities = new LinkedList();
cities.insert('Berlin', 'head');
cities.insert('London', 'Berlin');
cities.insert('Warsaw', 'London');
cities.insert('New York', 'Warsaw');
cities.list();
cities.remove('Warsaw');
cities.list();