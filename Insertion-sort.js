for (let i = 1; i < arr.length-1; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;

const arr = [28, 8, 26, 14, 23,25];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr));