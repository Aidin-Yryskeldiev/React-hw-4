import still from "./Loading.module.css";
import { useState } from "react";
const Loading = () => {
	const [show, setShow] = useState(false);
	console.log(show);
	const click = () => {
		setShow((old) => !old);
	};
	return (
		<div>
			<h1>Бешинчи уй тапшырма</h1>
			<button className={still.button_start} onClick={click}>
				Start
			</button>
			{show && (
				<div>
					<div className={still.loader}></div>
				</div>
			)}
		</div>
	);
};

export default Loading;
