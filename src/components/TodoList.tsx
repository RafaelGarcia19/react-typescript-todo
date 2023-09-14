import { TodoItem } from './TodoItem';
type TodoListProps = {
	todos: Todo[];
	handleToggle: (todoId: number) => void;
	handleDelete: (todoId: number) => void;
};

export const TodoList = ({
	handleDelete,
	handleToggle,
	todos,
}: TodoListProps) => {
	return (
		<ul className='list-group list-group-flush'>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onDeleteTodo={handleDelete}
					onToggleTodo={handleToggle}
				/>
			))}
		</ul>
	);
};
