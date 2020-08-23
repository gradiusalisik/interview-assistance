function Cat(color, name) {
  this.color = color;
  this.name = name;
}

// const cat = new Cat("black", "кот");
// // появляется новый инстанс класса Cat, в котором появляются поля color, name
// console.log(cat);
// Cat { color: 'black', name: 'кот' }

// Создадим собственый New
function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  return constructor.apply(obj, args) || obj;
}
// Таким образом выглядит реализация new в ES5 синтаксисе.

const cat = myNew(Cat, "black", "КОТ");
console.log(cat);
// Cat { color: 'black', name: 'КОТ' }

const cat = New();
console.log(cat); // undefined, потому что в функции New отсутствует возвращаемое значение.
