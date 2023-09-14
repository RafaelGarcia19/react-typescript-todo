import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

export const App = () => {
	const { todos, handleDelete, handleNewTodo, handleToggle } = useTodo();
	return (
		<div className='container'>
			<h1 className='text-center'>Todo App</h1>
			<hr />
			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>
				<div className='col-5'>
					<h4 className='text-center'>Add todo</h4>
					<hr />
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>
			</div>
		</div>
	);
};
