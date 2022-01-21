// BubbleSort | O(N^2)
function bubbleSort(array) {
    let limit = array.length - 1; // Seeting limit for inner loop.
    let isSorted = false;          
    let temp; 
    while (!isSorted) {  // While the array is not sorted.
        isSorted = true;
        for (let i=0; i<limit; i++) {
            if (array[i] > array[i+1]) { // If current value of the array is greater than the next one, we swap the values.
                temp = array[i];        
                array[i] = array[i+1];
                array[i+1] = temp;
                isSorted = false;  // The array hasn't be sorted yet, so we set this variable to false.
            }
        }
        limit--;
    }
    return array;
}

// Testing the algorithm...
let arr = [7, 5, 3, 9, 1, 6, 8, 4, 2];
console.log(arr, bubbleSort(arr));
