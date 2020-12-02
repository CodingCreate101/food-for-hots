// Solution 1:
// function sumFibs(num) {
//   const fibArray = [1, 1];

//   // Get Fib numbers upto 'num'
//   getFibUntilLimit(fibArray, num);

//   // Remove all even numbers
//   const evenFibs = getEvenNumbers(fibArray);

//   // Sum and return
//   return evenFibs.reduce((acc, ele) => acc + ele);
// }

// function getFibUntilLimit(fibArray, limit) {
//   const prev = fibArray[fibArray.length - 2];
//   const current = fibArray[fibArray.length - 1];
//   const next = prev + current;
//   if (next >= limit) {
//     return;
//   }
//   fibArray.push(next);
//   getFibUntilLimit(fibArray, limit);
// }

// function getEvenNumbers(fibArray) {
//   return fibArray.filter(n => n % 2 === 1);
// }

// Solution 2:
function sumFibs(num) {
  let sum = 1;
  let previous = 1;
  let current = 1;
  while (current < num) {
    if (current % 2 === 1) {
      sum += current;
    }

    [previous, current] = [current, current + previous];
  }
  return sum;
}

module.exports = sumFibs;
