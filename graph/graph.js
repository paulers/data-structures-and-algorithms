/*
    Implementation of Breadth-first-search in JS
    In this example, we're building a graph of airport connections
    - Undirected, meaning bi-directional
    - Not weighed, meaning the edges don't have properties
    - No cycles, meaning we can't visit the same airport twice

    Implementation via adjacency list
*/


// Nodes
const airports = 'ATL DXB LAX IST LHR DEL CDG JFK AMS HND MEX'.split(' ');

// Edges
const routes = [
    ['ATL', 'LHR'],
    ['ATL', 'IST'],
    ['IST', 'LAX'],
    ['IST', 'JFK'],
    ['IST', 'AMS'],
    ['DEL', 'LHR'],
    ['DEL', 'DXB'],
    ['DEL', 'MEX'],
    ['DEL', 'CDG'],
    ['MEX', 'DXB']
];

// Graph
const adjacencyList = new Map();

// Add a node
const addNode = (airport) => {
    adjacencyList.set(airport, [])
}

// Add an edge connecting two nodes, undirected
// We're assuming the origin and destination are airport code strings,
// and that the value of the map key is an array
const addEdge = (origin, destination) => {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create graph
// First, create all the nodes
airports.forEach(addNode);
// Second, add all the edges
// We can destructure the route array since the addEdge function takes two parameters
// and the array itself has two values
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);

module.exports = adjacencyList;