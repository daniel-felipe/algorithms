# BubbleSort | O(N^2)
def bubble_sort(list):
    limit = len(list) - 1 # Seeting limit for inner loop.
    is_sorted = False
    while not is_sorted: # While the array is not sorted.
        is_sorted = True
        for i in range(limit):
            if (list[i] > list[i+1]):   # If current value of the array is greater than the next one, we swap the values.
                list[i], list[i+1] = list[i+1], list[i]
                is_sorted = False   # The array hasn't be sorted yet, so we set this variable to false.
        limit -= 1
    return list

# Testing the algorithm...
arr = [7,5,3,9,1,6,4,2,8]
print(arr)
print(bubble_sort(arr))
