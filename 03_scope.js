// Scope говорит о доступности переменных в функциях.(область видимости.)
// Существует два понятия. Глобальный scope  и локальный scope

// Глобальный - это когда переменная находится вне функции. Но при этом доступна для всех функций, которые находятся внутри этого скоупа.

// window, document - global scope

function funcA() {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;

      console.log("funcC:", a, b, c);
    }
    funcC();
    console.log("funcB:", a, b);
  }
  funcB();
  console.log("funcA:", a);
}
funcA();
// funcC: 1 2 3
// funcB: 1 2
// funcA: 1
