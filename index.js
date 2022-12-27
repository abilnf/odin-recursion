function fibs(n) {
  const arr = [0, 1];
  while (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr.slice(0, n);
}

console.log(fibs(8));

function fibsRec(n, arr = [0, 1]) {
  return n <= 2
    ? arr.slice(0, n)
    : (arr = fibsRec(n - 1, arr)).concat(
        arr[arr.length - 1] + arr[arr.length - 2]
      );
}

console.log(fibsRec(8));

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const left = mergeSort(arr.slice(0, arr.length / 2));
  const right = mergeSort(arr.slice(arr.length / 2));
  const out = [];
  for (let i = 0; i < arr.length; i++)
    out.push(
      ((left[0] ?? Infinity) < (right[0] ?? Infinity) ? left : right).shift()
    );
  return out;
}

console.log(mergeSort([5, 8, 1, 3, 4, 6, 2, 7]));
