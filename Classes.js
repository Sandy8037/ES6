// // ES6 Class Definition
class Shapes {
  constructor (id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
    console.log(this.x + this.y);
  }
  toString () {
    return this.id;
  }
}
var newShapes = new Shapes(9, 4, 5);

// ES6 Class Inheritance
class Rectangle extends Shapes {
  constructor (id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  }
  // ES6 Base Class Access
  toString () {
    return super.toString();
  }
  static defaultRectangle () {
    return new Rectangle('default', 0, 0, 100, 100);
  }
}

class Circle extends Shapes {
  constructor (id, x, y, radius) {
    super(id, x, y);
    this.radius = radius;
  }
  static defaultCircle () {
    return new Circle('default', 0, 0, 100, 100);
  }
}

var newRect = new Rectangle(9, 4, 5, 3, 3);
console.log(newRect.toString());

// ES6 Static Members
var defRectangle = Rectangle.defaultRectangle();
var defCircle = Circle.defaultCircle();

// ES5 Class Definition
// (function () {
// 'use strict';
//
// var Shapes = function (id, x, y) {
//   this.id = id;
//   this.move(x, y);
// };
// Shapes.prototype.move = function (x, y) {
//   this.x = x;
//   this.y = y;
//   console.log(this.x + this.y);
// };
// Shapes.prototype.toString = function () {
//   return this.id;
// };
// var newShapes = new Shapes(9, 4, 5);
// console.log(newShapes.toString());
//
// // ES5 Class Inheritance
// var Rectangle = function (id, x, y, width, height) {
//   Shapes.call(this, id, x, y);
//   this.width = width;
//   this.height = height;
// };
// Rectangle.prototype = Object.create(Shapes.prototype);
// Rectangle.prototype.constructor = Rectangle;
// // ES5 Base Class Access
// Rectangle.prototype.toString = function () {
//   return Shapes.prototype.toString.call(this);
// };
// Rectangle.defualtRectangle = function () {
//   return new Rectangle('default', 0, 0, 100, 100);
// };
//
// var newRect = new Rectangle(9, 4, 5, 3, 3);
// console.log(newRect.toString());
//
// var Circle = function (id, x, y, radius) {
//   Shapes.call(this, id, x, y);
//   this.radius = radius;
// };
// Circle.prototype = Object.create(Shapes.prototype);
// Circle.prototype.constructor = Circle;
// Circle.defualtCircle = function () {
//   return new Circle('default', 0, 0, 100);
// };
// ES5 Static Members
// var defRectangle = Rectangle.defualtRectangle();
// var defCircle = Circle.defualtCircle();
//
// })();
