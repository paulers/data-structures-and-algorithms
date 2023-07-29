/*
    BREADTH-FIRST SEARCH
    Good for finding all the routes to determine which is the most efficient
*/
const adjacencyList = require('./graph');

// BFS - Breadth First Search

const bfs = (start, target) => {
    // A set can keep track of all the airports we've visited
    // all the values in the set are unique
    const visited = new Set();

    // Using a queue
    // The start node is the root of the graph
    const queue = [start];

    // Visit all the children and see if any of them are the destination
    while (queue.length > 0) {
        // get the airport root node
        const airport = queue.shift(); // mutates the queue array
        // get the airports this root node is connected to (edges)
        const destinations = adjacencyList.get(airport);
        // for each target destination, push it into the queue to inspect
        for (const d of destinations) {

            // add the visited destination to the set and add it to the queue for processing
            if (!visited.has(d)) {
                visited.add(d); // we don't wanna visit the same airport twice
                queue.push(d);
                console.log(d);
            }

            // if the destination == the target, we found it!
            if (d === target) {
                console.log('BFS Found it!');
            }
        }
    }
}

bfs('ATL', 'DXB')