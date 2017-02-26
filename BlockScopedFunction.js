// ES6 ES6 Block Scoped Function
{
  function foo () {
    return 1;
  }
  console.log(foo() === 1);
  {
    function foo () {
      return 2;
    }
    console.log(foo() === 2);
  }
  console.log(foo() === 1);
}

// ES5 way
// (function () {
//   var foo = function () {
//     return 1;
//   };
//   console.log(foo() === 1);
//   (function () {
//     var foo = function () {
//       return 2;
//     };
//     console.log(foo() === 2);
//   })();
//   console.log(foo() === 1);
// })();
