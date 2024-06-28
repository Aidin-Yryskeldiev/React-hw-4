import upps from "./Upps.module.css";
import { useState } from "react";
const Upps = () => {
	const [show, setShow] = useState(false);
	console.log(show);
	const click = () => {
		setShow((old) => !old);
	};
	return (
		<div>
			<h1>Тортунчу уй тапшырма</h1>
			<button className={upps.upps} onClick={click}>
				{show ? "Close" : "Open"}
			</button>
			{show && <h1>UUPS!</h1>}
		</div>
	);
};

export default Upps;
