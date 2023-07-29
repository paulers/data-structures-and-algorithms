/*
    DEPTH-FIRST SEARCH
    Recursion time!
    O(n+e) or O(n)
*/

const adjacencyList = require('./graph');

let steps = 0;
const dfs = (start, target, visited = new Set()) => {
    console.log(start);
    steps++;

    // we visit the start node at the beginning so we don't have to worry about it again
    visited.add(start);

    // grab the edges for the start node
    const destinations = adjacencyList.get(start);

    // for each destination
    for (const d of destinations) {

        // if found, bail
        if (d === target) {
            console.log(`DFS found ${target} in ${steps} steps`);
            return;
        }

        // if it has not been visited, call itself again
        if (!visited.has(d)) {
            dfs(d, target, visited)
        }
    }
}

dfs('ATL', 'DXB')