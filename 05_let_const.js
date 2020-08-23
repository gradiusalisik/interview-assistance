// // let позволяет создавать переменные, которые в последствии можно изменить.
// let a = "Variable a";
// let b = "Variable b";

// {
//   // Create our scope
//   a = "New Variable A";
//   let b = "Local Variable B"; // доступна только в рамках фигурных скобок
//   console.log("Scope A", a);
//   console.log("Scope B", b);
//   // Scope A New Variable A
//   // Scope B Local Variable B
//   console.log("Scope C", c);
//   // ReferenceError: Cannot access 'c' before initialization
//   let c = "Something";
// }
// console.log("A", a);
// // Scope A New Variable A
// console.log("B", b);
// // Variable b

// ********************************************************
// const
// На самом деле это не совсем константа, так как мы находимся внутри JS и всё в итоге приводится к переменным var.

const PORT = 8080;
PORT = 2000;
// TypeError: Assigment to constant variable
const array = ["Javascript", "is", "Awesome"];
array.push("!");
console.log(array);
//['Javascript', 'is', 'Awesome', '!'];
// Таким образом мы можем изменять массив, более того
array[0] = "JS";
console.log(array);
//['JS', 'is', 'Awesome', '!'];

// Так работают константы. Мы напрямую менять не можем данные array = newArr, но при этом можем добавлять, менять внутренности.

const obj = {};
obj.name = "Vladislav";
obj.age = 100;

console.log(obj);
// {name: 'Vladislav', age: 100 }
obj.age = 24;
console.log(obj);
// {name: 'Vladislav', age: 24 }
delete obj.name;
// { age: 24 }

// Всё также, но только мы не можем написать obj = '', т.е. прямое изменение.
