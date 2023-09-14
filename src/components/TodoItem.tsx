type TodoItemProps = {
	todo: Todo;
	onToggleTodo: (todoId: number) => void;
	onDeleteTodo: (todoId: number) => void;
};

export const TodoItem = ({
	todo,
	onDeleteTodo,
	onToggleTodo,
}: TodoItemProps) => {
	return (
		<li className='list-group-item'>
			<span
				className={`${todo.done ? 'text-decoration-line-through' : ''}`}
				onClick={() => onToggleTodo(todo.id)}
			>
				{todo.id} - {todo.desc}
			</span>
			<button
				className='btn btn-danger mx-2'
				onClick={() => {
					onDeleteTodo?.(todo.id);
				}}
			>
				Delete
			</button>
		</li>
	);
};
