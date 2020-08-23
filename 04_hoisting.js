// console.log(sum(1, 41)); // 42;
// function sum(a, b) {
//   return a + b;
// }

// Hoisting -  это когда JS, при интерпретации какого-то файла, берёт и перемещает определение некоторых вещей, например, функций, в начало файла, т.е. мы можем к ним обращаться до того, как их определили.

// console.log(i); // undefined На этом этапе переменная объявлена, но ещё не определена. Это равноценно, если бы мы перед консолью объявили var i;
// var i = 42;
// console.log(i); // 42

// ==========
// Переменные const  и  let  не подвержены хоистингу.
// console.log(num); // ReferenceError: Cannot access 'num' before initialization. Также будет и с let
// const num = 42;
// console.log(num);

// =======================
// Function Expression & Function Declaration
// console.log(square(25)); // 625
// function square(num) {
//   // Function declaration
//   return num ** 2;
// }

// console.log(square(25)); // square is not a function
// Если мы используем такое написание, то функция может быть вызвана только после того, как она была определена.
// var square = function (num) {
//   // Function expression
//   // Function declaration
//   return num ** 2;
// };
