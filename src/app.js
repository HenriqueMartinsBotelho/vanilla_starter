import { increment, decrement, store } from "./redux";

document.getElementById("increment").addEventListener("click", function () {
  store.dispatch(increment());
});

document.getElementById("decrement").addEventListener("click", function () {
  store.dispatch(decrement());
});

document
  .getElementById("incrementIfOdd")
  .addEventListener("click", function () {
    if (store.getState() % 2 !== 0) {
      store.dispatch(increment());
    }
  });

document
  .getElementById("incrementAsync")
  .addEventListener("click", function () {
    setTimeout(function () {
      store.dispatch(increment());
    }, 1000);
  });
