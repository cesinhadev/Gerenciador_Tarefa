import { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { v4 } from "uuid";

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
			description: "Estudar Ingles para se tornar um desenvolvedor full-stack",
			isCompleted: false,
		},
		{
			id: 3,
			title: "ler um livro",
			description: "Ler um livro novo",
			isCompleted: false,
		},
	]);

	function onTaskClick(taskId) {
		const newTask = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, isCompleted: !task.isCompleted };
			}
			return task;
		});
		setTasks(newTask);
	}

	function onDeleteTaskClick(taskId) {
		const newTask = tasks.filter((task) => task.id !== taskId);
		setTasks(newTask);
	}

	function onAddTaskSubmit(title, description) {
		const newTask = {
			id: v4(),
			title,
			description,
			isCompleted: false,
		};
		setTasks([...tasks, newTask]);
	}

	return (
		<div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
			<div className="w-[500px] space-y-5">
				<h1 className="text-3xl text-slate-100 font-bold text-center">
					Gerenciador de Tarefa
				</h1>
				<AddTask onAddTaskSubmit={onAddTaskSubmit}/>
				<Task
					tasks={tasks}
					onTaskClick={onTaskClick}
					onDeleteTaskClick={onDeleteTaskClick}
				/>
			</div>
		</div>
	);
}

export default App;
