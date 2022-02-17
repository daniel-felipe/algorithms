# SelectionSort | O(N^2)
def selection_sort(list):
    for i in range(len(list) - 1):
        # Getting the lowest index (so far).
        lowest_index = i
        for j in range(i+1, len(list)):
            if list[j] < list[lowest_index]:
                # As the value in index "j" is lower than in the index "lowestIndex",
                # the "lowestIndex" is now "j".
                lowest_index = j
        if lowest_index != i:
            # As the "lowestIndex" is now different than "i",
            # we swap the values.
            list[lowest_index], list[i] = list[i], list[lowest_index]
    return list


# Testing the algorithm...
arr = [7, 5, 3, 9, 1, 6, 4, 2, 8]
print(f'Original: {arr}')
print(f'Sorted..: {selection_sort(arr)}')
