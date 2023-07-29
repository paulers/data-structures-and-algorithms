/*
    QUICK SORT - O(n log n) or O(n^2) worst case, O(n) space
    Choosing the pivot impacts the performance of the algorithm. Using the median of 3 chosen numbers from start, end, middle is
    a way to choose the pivot.

    How it works: 
    It recursively sorts everything on the left and right of the pivot
*/

const quickSort = (array) => {
    // bail early if array is empty
    if (array.length <= 1) return array;
    // find the median pivot
    const pivot = array[0];

    // set the left half of the array to be less than the pivot
    let left = array.filter(x => x < pivot);
    // set the right half of the array to be greater than the pivot
    let right = array.filter(x => x > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const testData = [72, 54, 29, 30, 31, 89, 2, 77, 82, 51];
const testData2 = [2, 1, 4, 3]
const sorted = quickSort(testData);
console.log(sorted);