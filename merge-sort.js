const mergeSort = (arr) => {
  if(arr.length > 1) {
    let mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  return arr;
}

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  let k = 0;
  const result = [];
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      result[k++] = left[i++];
    } else {
      result[k++] = right[j++];
    }
  }
  for(; i < left.length; i++) {
    result[k++] = left[i];
  }
  for(; j < right.length; j++) {
    result[k++] = right[j];
  }
  return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));