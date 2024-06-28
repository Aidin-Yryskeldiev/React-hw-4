import stily from "./Item.module.css";
import { useState } from "react";
const Item = () => {
	const [item, setItem] = useState("");
	const updateItem = (newItem) => {
		setItem(newItem);
	};
	return (
		<div>
			<h1>Жетинчи уй тапшырма</h1>
			<button
				className={stily.button_click}
				onClick={() => updateItem("Item 1")}>
				Item 1
			</button>
			<button
				className={stily.button_click}
				onClick={() => updateItem("Item 2")}>
				Item 2
			</button>
			<button
				className={stily.button_click}
				onClick={() => updateItem("Item 3")}>
				Item 3
			</button>
			<button
				className={stily.button_click}
				onClick={() => updateItem("Item 4")}>
				Item 4
			</button>
			<button
				className={stily.button_click}
				onClick={() => updateItem("Item 5")}>
				Item 5
			</button>
			<p className={stily.text_selected}>You selected: {item}</p>
		</div>
	);
};

export default Item;
