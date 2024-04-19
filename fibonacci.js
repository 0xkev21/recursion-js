const fibs = (n) => {
  const arr = [0, 1];
  if (n <= 0) return "Please enter a number greater than or equal to 0";
  if (n === 0) return [0];
  if (n === 1) return arr;
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

console.log(fibs(8));