// ES6 Property Shorthand
var func = (x, y) => {
  var obj = {x, y};
  console.log(obj);
};
func(1, 2);

// ES5 Property Shorthand
// (function () {
// 'use strict';
//
// var func = function (x, y) {
//   var obj = {
//     x: x,
//     y: y
//   };
//   console.log(obj);
// };
// func(1, 2);
//
// })();

// ES6 Method Properties
var obj = {
  foo () {
    console.log('1');
  },
  bar () {
    console.log('2');
  },
  *quux () {
    console.log('3');
  }
};
console.log(obj);
