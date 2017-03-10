// ES6 Symbols
console.log(Symbol('foo') !== Symbol('foo'));
const foo = Symbol();
const bar = Symbol();
console.log(typeof foo === 'symbol');
console.log(typeof bar === 'symbol');
let obj = {};
obj[foo] = 'foo';
obj[bar] = 'bar';
console.log(JSON.stringify(obj));
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

// No ES5 way

// ES6 Global Symbols
// console.log(Symbol.for('app.foo') === Symbol.for('app.foo'));
// const foo = Symbol.for('app.foo');
// const bar = Symbol.for('app.bar');
// console.log(Symbol.keyFor(foo) === 'app.foo');
// console.log(Symbol.keyFor(bar) === 'app.bar');
// console.log(typeof foo === 'symbol');
// console.log(typeof bar === 'symbol');
// let obj = {};
// obj[foo] = 'foo';
// obj[bar] = 'bar';
// console.log(JSON.stringify(obj));
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));

// No ES5 way 
