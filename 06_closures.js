// // Замыкание - это момент, когда функция имеет доступ до переменных вышестоящего скоупа. Когда функция замыкает в себе значение перменных из вышестоящего скоупа.

// // function sayHelloTo(name) {
// //   const message = "Hello " + name;

// //   return function () {
// //     console.log(message);
// //   };
// // }

// // const helloToElena = sayHelloTo("Elena");
// // console.log(helloToElena);
// // // [Function]
// // console.log(helloToElena());
// // Hello Elena
// // undefined так как ничего не возращает, то возвращается умолчание.

// // ***************************************************
// function createFrameworkManager() {
//   const fw = ["Angular", "React"];

//   return {
//     print: function () {
//       console.log(fw.join(" "));
//     },
//     add: function (framework) {
//       fw.push(framework);
//     },
//   };
// }

// const manager = createFrameworkManager();

// console.log(manager);
// // { print: [Function: print], add: [Function: add] }

// manager.print();
// // Angular React
// manager.add("VueJS");
// manager.print();
// // Angular React VueJS

// // ***********============************
// // setTimeout
const fib = [1, 2, 3, 5, 6, 13];
// for (var i = 0; i < fib.length; i++) {
//   setTimeout(function () {
//     console.log(`fib[${i}] = ${fib[i]}`);
//   }, 1500);
// }

// fib[6] = undefined Выводится столько, сколько элементов в массиве.
// Объяснение:
// В действительности мы создаём 1 раз переменную i и дальше она изменяется как ссылка. Т.е. у нас здесь всего одна переменная i здесь существует. Когда индекс i = 6. Мы проверяем, что i < fib.length , у нас длина = 6. 6 < 6 после этого цикл for у нас не работает, но i у нас уже принимает значение 6. Поэтому везде у нас выводится цифра 6.

// Как починить?
// 1. Поменять на переменную let, она существует только внутри блочного скоупа. Наш скоуп это фигурные скобки.
// 2. C помощью замыкания.
for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);
}
// fib[0] = 1
// fib[1] = 2
// fib[2] = 3
// fib[3] = 5
// fib[4] = 6
// fib[5] = 13

// Объяснения в следующем файле.
