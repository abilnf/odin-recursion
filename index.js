function fibs(n) {
  const arr = [0, 1];
  while (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr.slice(0, n);
}

console.log(fibs(8));
