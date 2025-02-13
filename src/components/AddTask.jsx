import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<div className="space-y-5 p-6 bg-slate-200 rounded-md shadow flex flex-col">
			<input
				type="text"
				placeholder="Digite um titulo para a tarefa"
				className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<input
				type="text"
				placeholder="Digite uma descrição para a tarefa"
				className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<button
				onClick={() => {
					// verifica se possui algo dentro da caixa de texto
					if (!title.trim() || !description.trim()) {
						alert("Prencha o titulo e a descrição para continuar");
					} else {
						onAddTaskSubmit(title, description);
						setTitle("");
						setDescription("");
					}
				}}
				className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
			>
				Adicionar
			</button>
		</div>
	);
}

export default AddTask;
