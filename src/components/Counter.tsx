import { createSignal } from "solid-js";

const Counter = () => {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<button type="button" onClick={() => setCount(count() + 1)}>
				+
			</button>
			<p>{count()}</p>
			<button type="button" onClick={() => setCount(count() - 1)}>
				-
			</button>
		</>
	);
};

export default Counter;
