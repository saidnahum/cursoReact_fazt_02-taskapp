// Importando useState
import { useState, useEffect } from "react";

// Importando componentes
import TaskRow from './components/TaskRow';
import TaskBanner from './components/TaskBanner';
import TaskCreator from "./components/TaskCreator";
import VisibilityControl from './components/VisivilityControl'

function App() {

	// Definiendo el State

	const [userName, setUserName] = useState('Said');

	const [taskItems, setTaskItems] = useState([
		{ name: 'Tarea 1', done: false },
		{ name: 'Tarea 2', done: false },
		{ name: 'Tarea 3', done: true },
		{ name: 'Tarea 4', done: false }
	]);

	const [showCompleted, setShowCompleted] = useState(true);

	// useEffec - Se ejecutará antes de pintar los componentes
	// Adquiriendo datos de LocalStorage
	useEffect(() => {
		let data = localStorage.getItem('tasks');
		if(data != null){
			// Si hay datos en localstorage, traerlos
			setTaskItems(JSON.parse(data));
		} else {
			// Si no hay datos en el localstorage poner estos de ejemplo
			setUserName('Meteoro')
			setTaskItems([
				{ name: 'Tarea 1 example', done: false },
				{ name: 'Tarea 2 example', done: false },
				{ name: 'Tarea 3 example', done: true },
				{ name: 'Tarea 4 example', done: false }
			])
			setShowCompleted(true)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(taskItems));
	}, [taskItems])

	// Funcion para crear/agregar otra tarea
	const createNewTask = (taskName) => {
		if(!taskItems.find(t => t.name === taskName)){
			setTaskItems([...taskItems, {name: taskName, done: false}]);
		}
	}

	// Funcion para cambiar el checkbox
	const toggleTask = (task) => (
		setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))
	)
	
	// Funcion para agregar tr a la tabla
	const taskTableRows = (doneValue) => (
		taskItems
		.filter(task => task.done === doneValue)
		.map(task => (
			<TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
		))
	)

	return (
		<div className="App">
			<TaskBanner userName={userName} taskItems={taskItems}/>
			<TaskCreator callback={createNewTask}/>

			<section className="container mx-auto p-6 font-mono">
				<div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
					<div className="w-full">
						<table className="w-full">
							<thead>
								<tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
									<th className="px-4 py-3">Nombre</th>
									<th className="px-4 py-3">Done</th>
								</tr>
							</thead>
							<tbody className="bg-white">
								{ taskTableRows(false) }
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<section className="container mx-auto p-6 text-center">
				<VisibilityControl
					description="Tareas Completas"
					isChecked={showCompleted}
					callback={checked => setShowCompleted(checked)}
				/>
			</section>

			{
				showCompleted && (
					<section className="container mx-auto p-6 font-mono">
						<div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
							<div className="w-full">
								<table className="w-full">
									<thead>
										<tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
											<th className="px-4 py-3">Nombre</th>
											<th className="px-4 py-3">Done</th>
										</tr>
									</thead>
									<tbody className="bg-white">
										{ taskTableRows(true) }
									</tbody>
								</table>
							</div>
						</div>
					</section>
				)
			}
		</div>
	);
}

export default App;
