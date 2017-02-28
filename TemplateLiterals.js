// ES6 String Interpolation
var greeting = {
  message: 'Hello'
};

var name = 'Sandy';
var msg = `${greeting.message} ${name} show are you?`;
console.log(msg);

// ES5 String Interpolation
// (function () {
// 'use strict';
//
// var greeting = {
//   message: 'Hello'
// };
//
// var name = 'Sandy';
//
// console.log(greeting.message + ' ' + name +  ' how are you?');
//
// })();
