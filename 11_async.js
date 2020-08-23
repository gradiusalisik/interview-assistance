// JS работает в одном потоке. Это означает, что ни о какой асинхронности речи быть не может. При этом JS неплохо справляется с какими-то асинхромнными вещами. По типу setTimeout , запросами на сервер.
// Всё это стало доступно благодаря концепции event loop  и того, как реализован call stack в принципе в JS.

const first = () => console.log("First");
const second = () => console.log("Second");
const third = () => console.log("Third");

first();
setTimeout(second, 0);
third();
// First
// Third
// Second

/* Когда интерпретатор доходит до first, он закидывает в call stack эту функцию. Она выполняется вызываея console.log и потом когда она завершается. Интерпретатор берёт и выкидыает отсюда функцию first, т.е. call stack сейчас пуст, идет дальше. Он находит строчку setTimeout.
 JS не понимает, как работать с таймаутами различными и поэтому он использует сторонний API. Он закдиывает информацию, что когда таймаут выполнистя, нужно выполнить функцию second и он его закидывает на сторонний API. И дальше он выкидывает всё из call stack и он чист. Доходит до third делает те же операции, что с функцией first. В это время, пока вывполняется функция third , сторонний API увидел, что setTimeout он моментальный и поэтому он пометил функцию second , как нужную для выполнения и помещает её в такой концепт, который называется callback queue(очередь из callback) и там уже действует event loop , который бегает по этой очереди и когда call stack становится пустым. Он из очереди помещает в call stack функцию и она выполняется последней.
*/
