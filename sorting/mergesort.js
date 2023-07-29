/*
    MERGE SORT - O(n log n) time, O(n) space

    How it works: 
    Splits the array into smaller chunks recursively until there is only a pair of items left,
    then merges them in the correct order by doing comparison. It's recursive.
*/

// Merge function
const merge = (left, right) => {
    let array = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    return [...array, ...left, ...right];
}

// Sort function
const mergeSort = (array) => {
    // find the middle first
    const middle = array.length / 2;

    // base case and exit when less than 2 items in the array
    if (array.length < 2) {
        return array;
    }

    // split the array in two with splice
    const left = array.splice(0, middle);

    // the merge left and right 
    // (since splice xforms the array in-place, array is just the right side leftover)
    return merge(mergeSort(left), mergeSort(array));
}

const testData = [72, 54, 29, 30, 31, 89, 2, 77, 82, 51];
const testData2 = [2, 1, 4, 3]
const sorted = mergeSort(testData);
console.log(sorted);