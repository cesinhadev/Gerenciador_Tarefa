import { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "Estudar",
			description:
				"Estudar programação para se tornar um desenvolvedor full-stack",
			isCompleted: false,
		},
		{
			id: 2,
			title: "Estudar Ingles",
			description:
				"Estudar Ingles para se tornar um desenvolvedor full-stack",
			isCompleted: false,
		},
		{
			id: 3,
			title: "ler um livro",
			description:
				"Ler um livro novo",
			isCompleted: false,
		},
	]);

	return (
		<div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
			<div className="w-[500px]">
				<h1 className="text-3xl text-slate-100 font-bold text-center">
					Gerenciador de Tarefa
				</h1>
				<AddTask />
				<Task tasks={tasks}/>
			</div>
		</div>
	);
}

export default App;
