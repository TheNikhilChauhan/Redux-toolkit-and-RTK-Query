#Redux

<p>In Redux, the data passing occurs through a central store, which serves as a single source of truth for the entire application.</p>
<h3>What is a Store?</h3>
<p>A Store is a central place where the state of our application is stored and it can be created using configureStore function, and it holds the entire state tree of our application.</p>

<h3>1.Create Store</h3>

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

<h3>2.Provide the Redux Store to React</h3>

```js
import { store } from "./app/store";
import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>;
```

<h3>What is Slice?</h3>
<p>A slice is a piece of store state and the corresponding reducer logic to update that state. Slices are a way to organize our Redux store by breaking it down into smaller, more manageable parts.</p>
<p>Ex: Imagine you have a big cake, and you want to cut it into smaller, more manageable pieces. Each smaller piece is like a slice of the cake. In the context of Redux toolkit a slice is like a smaller part of your application's overall state and the instructions on how to change or update that specific part.</p>

<h3>3.Create Slice</h3>

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

<h3>Reducers</h3>
<ul>
    <li>Reducers are like the instructions on what to do with each slice of the cake.</li>
    <li>They define how the information in a particular slice can be changed or updated.</li>
</ul>
<h3>Actions</h3>
<ul>
    <li>Actions are like the request or commands you give to change a specific slice of the cake.</li>
    <li>Ex: you might have an action called "Eat a Bite" that instructs how to take a bite from a slice.</li>
</ul>

<h3>4.Add Slice Reducers to the Store</h3>

```js
import counterReducer form "./features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

```

<h3>5.Use Redux State and Actions in React Component</h3>

```js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>

        <button onClic={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
```

<h3>useSelector() Hook</h3>
<p>It allows us to read data from the redux store.</p>

<h3>useDispatch() Hook</h3>
<ul>
<li>It is used to send actions to the store, triggering updates to the application state.</li>
<li>In simpler terms, it lets you change the state in your Redux store from within your React Components.</li>
</ul>
