import stily from "./Buttons.module.css";
import { useState } from "react";

const Buttons = () => {
	const [item, setItem] = useState("");

	const updateItem = (newItem) => {
		setItem(newItem);
	};

	return (
		<div>
			<h1>Алтынчы уй тапшырма</h1>
			<button className={stily.buttons} onClick={() => updateItem("Home")}>
				Home
			</button>
			<button className={stily.buttons} onClick={() => updateItem("About")}>
				About
			</button>
			<button className={stily.buttons} onClick={() => updateItem("Contact")}>
				Contact
			</button>
			<h1 className={stily.result}>{item}</h1>
		</div>
	);
};

export default Buttons;
