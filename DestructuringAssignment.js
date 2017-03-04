// ES6 Array Matching
var list = [1, 2, 3];
var [a, , b] = list;
console.log([b, a] === [a, b]);

// ES5 Array Matching
// (function () {
// 'use strict';
//
// var list = [1, 2, 3];
// var a = list[0], b = list[2];
// var temp = a;
// a = b;
// b = temp;
// console.log(a === b);
// })();

// ES6 Object Matching, Shorthand Notation
var func = function () {
  return {
    op: 1,
    lhs: 2,
    rhs: 3
  };
};
var {op, lhs, rhs} = func();
console.log(lhs);

// ES5 Object Matching, Shorthand Notation
// (function () {
// 'use strict';
//
// var func = function () {
//   return {
//     op: 1,
//     lhs: 2,
//     rhs: 3
//   };
// };
// var temp = func();
// var op = temp.op;
// console.log(op);
//
// })();

// ES6 Object Matching, Deep Matching
var func = function () {
  return {
    op: 1,
    lhs: {
      op: 2
    },
    rhs: 3
  };
};
var {op: a, lhs: {op: b}, rhs: c} = func();
console.log(lhs);

// ES5 Object Matching, Deep Matching
// (function () {
// 'use strict';
//
// var func = function () {
//   return {
//     op: 1,
//     lhs: {
//       op: 2
//     },
//     rhs: 3
//   };
// };
// var temp = func();
// var op = temp.lhs.op;
// console.log(op);
//
// })();

// ES6 Parameter Context Matching
function f([name, val]) {
  console.log(name, val);
}
function g({name: n, val: v}) {
  console.log(n, v);
}
function h({name, val}) {
  console.log(name, val);
}
f(['bar', 42]);
g({name: 'foo', val: 7});
h({name: 'bar', val: 42});


// ES5 Parameter Context Matching
// (function () {
// 'use strict';
//
// function f(arg) {
//   var name = arg[0];
//   var val = arg[1];
//   console.log(name, val);
// }
// function g(arg) {
//   var n = arg.name;
//   var v = arg.val;
//   console.log(n, v);
// }
// function h(arg) {
//   var name = arg.name;
//   var val = arg.val;
//   console.log(name, val);
// }
// f(['bar', 42]);
// g({name: 'foo', val: 7});
// h({name: 'bar', val: 42});
//
// })();

// ES6 Fail Soft Destruction
var list = [7, 42];
var [a = 1, b = 2, c = 3, d] = list;
console.log(a === 7);
console.log(b === 42);
console.log(c === 3);
console.log(d === undefined);

// ES5 Fail Soft Destruction
// (function () {
// 'use strict';
//
// var list = [7, 42];
// var a = typeof list[0] !== 'undefined' ? list[0] : 1;
// var b = typeof list[1] !== 'undefined' ? list[1] : 2;
// var c = typeof list[2] !== 'undefined' ? list[2] : 3;
// var d = typeof list[3] !== 'undefined' ? list[3] : undefined;
// console.log(a === 7);
// console.log(b === 42);
// console.log(c === 3);
// console.log(d === undefined);
//
// })();
