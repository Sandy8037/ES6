// ES6 Iterator & for-of Operator
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next () {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur}
      }
    };
  }
};
for (let n of fibonacci) {
  if (n > 1000) {
    console.log(n);
    break;
  }
}

// ES5 Iterator
// (function () {
// 'use strict';
//
// var fibonacci = {
//   next: (function () {
//     var pre = 0, cur = 1, temp;
//     return function () {
//       temp = pre;
//       pre = cur;
//       cur += temp;
//       return cur;
//     };
//   })()
// };
// var n;
// for (;;) {
//   n = fibonacci.next();
//   if (n > 1000) {
//     console.log(n);
//     break;
//   }
// }
//
// })();
