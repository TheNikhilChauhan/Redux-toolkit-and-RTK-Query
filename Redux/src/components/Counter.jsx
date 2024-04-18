import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice";

export const Counter = () => {
  //Read the data from the store
  const count = useSelector((state) => state.counter.value);

  //changing the data by sending the actions to the store
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Count: {count}</h2>

        <button onClick={() => dispatch(increment())}>Increment</button>

        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
