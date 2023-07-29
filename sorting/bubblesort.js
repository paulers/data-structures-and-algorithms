/*
    BUBBLE SORT - O(n^2) time, O(1) space

    How it works: 
    For each number, see if the number to the right is larger than it. 
    If it is, stop.
    If it isn't, swap the places.
*/

const bubbleSort = (array) => {

    // For each number in the array
    for (let i = 0; i < array.length; i++) {
        // Get the number being iterated over
        const numberBeingMoved = array[i];
        console.log(`Number being moved: ${numberBeingMoved}`)

        // For each number in the array
        // MINUS THE CURRENT INDEX, MINUS 1 (because we're comparing to the right)
        for (let j = 0; j < array.length - i - 1; j++) {
            const numberBeingCompared = array[j];
            const numberToTheRight = array[j + 1];

            if (numberBeingCompared > numberToTheRight) {
                // swap
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }

    }

    return array;
}

const testData = [72, 54, 29, 30, 31, 89, 2, 77, 82, 51];
const testData2 = [2, 1, 4, 3]
const sorted = bubbleSort(testData);
console.log(sorted);