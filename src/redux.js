export const RTK = window.RTK;

export const increment = RTK.createAction("increment");
export const decrement = RTK.createAction("decrement");

export const counter = RTK.createReducer(0, {
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
});

export const store = RTK.configureStore({ reducer: counter });
export const valueEl = document.getElementById("value");

export function render() {
  valueEl.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);
