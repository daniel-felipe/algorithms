// SelectionSort | O(N^2)
function selectionSort(array) {
     // Setting a temporary variable to swap values.
    let temp;  
    for (let i=0; i<array.length - 1; i++) {
        // Getting the lowest index (so far).
        let lowestIndex = i;    
        for (let j=i+1; j<array.length; j++) {
            if (array[j] < array[lowestIndex]) {
                // As the value in index "j" is lower than in the index "lowestIndex",
                // the "lowestIndex" is now "j".
                lowestIndex = j;    
            }                       
        }
        if (lowestIndex != i) {  
            // As the "lowestIndex" is now different than "i",
            // we swap the values.
            temp = array[i];     
            array[i] = array[lowestIndex];
            array[lowestIndex] = temp;
        }
    }
    return array;
}

// Testing the algorithm...
let arr = [7, 5, 3, 9, 1, 6, 8, 4, 2];
console.log(`Original: [${arr}]`);
console.log(`Sorted..: [${selectionSort(arr)}]`);
