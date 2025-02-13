import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Task({tasks, onTaskClick, onDeleteTaskClick}) {
	const navigate = useNavigate();
	
	function onSeeDetailClick(task){
		const query = new URLSearchParams();
		query.set("title", task.title);
		query.set("description", task.description);
		navigate(`/detailTask?${query.toString()}`)
	}

	return (
		<ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
			{tasks.map((task) => (
				<li key={task.id} className="flex gap-2">
					<button
						onClick={() => onTaskClick(task.id)}
						className={`text-left w-full bg-slate-400 text-white p-2 rounded-md ${
							task.isCompleted && "line-through"
						}`}
					>
						{task.title}
					</button>
					<button onClick={() => onSeeDetailClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
						<ChevronRightIcon />
					</button>
					<button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
						<TrashIcon />
					</button>
				</li>
			))}
		</ul>
	);
}

export default Task;
