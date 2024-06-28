import { useState } from "react";
import styles from "./Counter.module.css";
const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1 className={styles.text}>Экинчи уй тапшырма</h1>
			<div className={styles.button_flexBox}>
				<button className={styles.counter} onClick={() => setCount(count + 1)}>
					Increment
				</button>
				<h1 className={styles.number}>{count}</h1>
				<button className={styles.counter} onClick={() => setCount(count - 1)}>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default Counter;
