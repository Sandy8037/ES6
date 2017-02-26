// ES6 Block Scoped Variable
let arr = [];
for (let i = 0; i <= 2; i++) {
  arr[i] = function () {
    return i * 2;
  };
}

for (let i = 0; i <= 2; i++) {
  console.log(arr[i]());
}

// ES5 way
// (function () {
// 'use strict';
//
// var arr = [];
// for (var i = 0; i <= 2; i++) {
//   (function (i) {
//     arr[i] = function () {
//       return i * 2;
//     };
//   })(i);
// }
//
// for (var i = 0; i <= 2; i++) {
//   console.log(arr[i]());
// }
//
// })();
