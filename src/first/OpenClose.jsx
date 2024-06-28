import { useState } from "react";
import css from "./OpenClose.module.css";
const OpenClose = () => {
	const [openButton, setOpenButton] = useState("OPEN");
	const toggleButton = () => {
		if (openButton === "OPEN") {
			setOpenButton("CLOSE");
		} else {
			setOpenButton("OPEN");
		}
	};
	return (
		<div>
			<h1>Биринчи уй тапшырма</h1>
			<button className={css.open} onClick={toggleButton}>
				{openButton}
			</button>
		</div>
	);
};

export default OpenClose;
