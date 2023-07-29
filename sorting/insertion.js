/*
    INSERTION SORT - O(n^2) time, O(1) space
    It can be okay if the data is already "mostly sorted"

    How it works: 
    Work left to right, examine each item and compare it to items on its left
    Insert the item inthe correct position in the array
*/

const insertionSort = (array) => {

    // For each number in the array
    for (let i = 0; i < array.length; i++) {
        // Get the number we're moving
        const currentNumber = array[i];
        const previousIndex = i - 1;

        // While the value at the previous index is greater than the current value
        // We move the previous value to the right
        while (previousIndex > -1 && currentNumber < array[previousIndex]) {
            array[previousIndex + 1] = array[previousIndex]
            previousIndex--
        }
        array[previousIndex + 1] = current;
    }

    return array;
}

const testData = [72, 54, 29, 30, 31, 89, 2, 77, 82, 51];
const testData2 = [2, 1, 4, 3]
const sorted = insertionSort(testData);
console.log(sorted);