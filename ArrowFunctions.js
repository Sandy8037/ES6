var evens = [2, 4, 6, 8, 10];

// ES6 Expression Bodies
var odds = evens.map((v) => v - 1);
console.log(odds);

// (function () {
// 'use strict';
//
// // ES5 way
// var evens = [2, 4, 6, 8, 10];
// var odds = evens.map(function (v) {
//   return v - 1;
// })
//
// // var odds = [];
// //
// // for (var i = 0; i < evens.length; i++) {
// //   odds.push(evens[i] - 1);
// // }
// console.log(odds);
//
// })();

// ES6 Statement Bodies
var nums = [5, 10, 12, 15];
var fives = [];

nums.forEach((v) => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
console.log(fives);
