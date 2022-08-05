import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";
export default function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    let increment = () => {
        dispatch(actions.increment());
    };
    let decrement = () => {
        dispatch(actions.decrement());
    };
    let addBy = () => {
        dispatch(actions.addBy(10));
    };

    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addBy}>Add By 10</button>
        </div>
    );
}
