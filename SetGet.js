// ES6 Class Setter/Getter
class Rectangle {
  constructor (width, height) {
    this._width = width;
    this._height = height;
  }
  set width (width) { this._width = width; }
  get width () { return this._width }
  set height (height) { this._height = height }
  get height () { return this._height }
  get area () { return this._width * this._height }
}
var newRect = new Rectangle(50, 20);
console.log(newRect.area === 1000);

// ES5 Class Setter/Getter
// (function () {
// 'use strict';
//
// var Rectangle = function (width, height) {
//   this._width = width;
//   this._height = height;
// };
// Rectangle.prototype = {
//   set width (width) { this._width = width; },
//   get width () { return this._width; },
//   set height (height) { this._height = height; },
//   get height () { return this._height; },
//   get area () { return this._width * this._height }
// };
// var newRect = new Rectangle(50, 20);
// console.log(newRect.area === 1000);
//
// })();
