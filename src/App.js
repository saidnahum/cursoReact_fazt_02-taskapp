import { useState } from "react";

function App() {

	const [userName, setUserName] = useState('Said');
	const [taskItems, setTaskItems] = useState([
		{name: 'Tarea 1', done: false}
	]);

	return (
		<div className="App">
			<h1 className="text-2xl font-bold">Hello World!!</h1>
		</div>
	);
}

export default App;
