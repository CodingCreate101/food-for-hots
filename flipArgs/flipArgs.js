const reverseArray = arr => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
};

function flipArgs(func) {
  return function (...args) {
    return func(...reverseArray(args));
  };
}

// const flipped = flipArgs((...args) => {
//   return args;
// });

// console.log(flipped("a", "b", "c", "d", "e")); // ["e", "d", "c", "b", "a"]

module.exports = { flipArgs, reverseArray };
