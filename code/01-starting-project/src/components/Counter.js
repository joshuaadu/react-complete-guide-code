import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/Counter";
import { useRef } from "react";

const Counter = () => {
	const increaseInputRef = useRef();
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};
	const increaseHandler = (e) => {
		e.preventDefault();
		const increaseValue = parseInt(increaseInputRef.current.value);
		console.log(increaseValue);
		dispatch(counterActions.increase(increaseValue));
	};
	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}{" "}
			<div>
				<button onClick={incrementHandler}>increase Counter</button>
				<button onClick={decrementHandler}>decrease Counter</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
			<form onSubmit={increaseHandler}>
				<input
					className="number-input"
					type="number"
					ref={increaseInputRef}
					defaultValue={0}
					min={0}
					maxLength={3}
				/>
				<button type="submit">Increase By</button>
			</form>
		</main>
	);
};

export default Counter;
