// ES6 Default Parameter Values
function func(x, y, z = 3) {
  return x + y + z;
}
console.log(func(3, 3));

// ES5 Default Parameter Values
// (function () {
// 'use strict';
//
// function func(x, y, z) {
//   if (z === undefined) {
//     z = 3;
//   }
//   return x + y + z;
// }
// console.log(func(3, 3));
//
// })()

// ES6 Rest Parameter
function newfunc(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(newfunc(1, 2, 'hello', true, 7));

// ES5 Rest Parameter
// (function () {
// 'use strict';
//
// function func(x, y) {
//   var a = Array.prototype.slice.call(arguments, 2);
//   return (x + y) * a.length;
// }
// console.log(func(1, 2, 'hello', true, 7));
//
// })();

// ES6 Spread Operator
var arr = [1, 2, 3];
var newArr = [4, 5, ...arr];
console.log(newArr);

var str = 'foo';
console.log([...str]);


// ES5 Spread Operator
// (function () {
// 'use strict';
//
// var arr = [1, 2, 3];
// var newArr = [4, 5].concat(arr);
// console.log(newArr);
//
// var str = 'foo';
// console.log(str.split(''));
//
// })();
