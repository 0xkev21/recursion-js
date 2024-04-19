const recursiveFibs = (n) => {
  if(n <= 0) return "Please enter a number greater than or equal to 0";
  if(n === 1) return [0];
  if(n === 2) return [0, 1];
  return [...recursiveFibs(n - 1), (recursiveFibs(n - 1)[n - 2] + recursiveFibs(n - 1)[n - 3])];
}

console.log(recursiveFibs(8));