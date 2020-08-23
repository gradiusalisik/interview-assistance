// null, undefined, boolean, number, string, object, symbol

// Все данные примитивные, кроме object.
// console.log(typeof 0) number
// console.log(typeof true) boolean

// console.log(typeof 'Javascript') string
// Есть 3 вида написания строчек "" '' `` , последние применяются для динамических данных

// console.log(typeof undefined) undefined
// console.log(typeof Math) object
// console.log(typeof Symbol('JS')) symbol
// console.log(typeof null) object первая неточность, которая есть у оператора typeof. На самом деле null является типом данных null.

// console.log(typeof function() {}) function На самом деле это является объектом. Но для того, чтобы удобнее было разрабатывать и понимать, где функции, а где объекты, оператор typeof на функцию выдает function.

// console.log(typeof NaN) number Это действительно число. Вот такая есть неточность в JS.

// В чём отличие undefined от null?
// undefined - появляется, когда переменная не объявлена или объявлена с помощью var, но при этом в ней нет никакого значения. По умолчанию функция, в которой ничего не возвращают, возвращает undefined.
// null - говорит о том, что в переменной нет никакого значения. Т.е. её объявили, а потом решили обнулить и записать в неё null

// Приведение типов.
// let language = 'Javascript';

// if (language) { // видит, что это строка и поэтому являтся true
//   console.log('The best language is:', language);
// }

// Falsy values
// '', 0, null, undefined, NaN, false

// console.log(Boolean('')) false
// console.log(Boolean('Hello')) true
// console.log(Boolean(' ')) true так как пробел - это не пустая строка
// console.log(Boolean('0')) true
// console.log(Boolean(0)) false  в JS 1 -> true 0 -> false
// console.log(Boolean(null)) false
// console.log(Boolean([])) true
// console.log(Boolean({})) true
// console.log(Boolean(function() {})) true

// Строки и числа.
// console.log(1 + '2') 12 string благодаря конкатенации из-за того, что там строка, он соединяет символы строк
// console.log('' + 1 + 0) 10 string
// console.log('' - 1 + 0) -1 Для строк неопределн знак минус, поэтому будет число.
// console.log('3' * '8') 24 number также неопределен знак умножения в строк, поэтому на выходе будет число.
// console.log(4 + 10 + 'px') 14px string;
// console.log(px' + 5 + 10) px510 string;
// console.log('42' - 40) 2 number;
// console.log('42px' - 2) NaN  при невозможности привидения строки к числу, будет выводиться NaN
// console.log(null + 2) 2 number null -> 0
// console.log(undefined + 42) NaN невозможно привести к числу undefined

// == vs ===
// Двойное равно сравнивает по значению, но с приведением типов
// Тройное сравнивает по значению, но без приведения типов

// console.log(2 == '2') true
// console.log(2 === '2') false
// console.log(undefined == null) true
// console.log(undefined === null) false
// console.log('0' == false) true пытается привести к числу, false -> 0, '0' -> 0
// console.log('0' == 0) true
// console.log(0 == 0) true

// =======================
// console.log(false == "")  true
// console.log(false == [])  true
// console.log(false == {})  false
// console.log('' == 0)  true
// console.log('' == [])  true
// console.log('' == {})  false
// console.log(0 == [])  true
// console.log(0 == {})  false
// console.log(0 == null)  false
