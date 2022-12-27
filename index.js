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
