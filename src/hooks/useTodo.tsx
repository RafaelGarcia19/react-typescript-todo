import { useEffect, useReducer, useCallback } from 'react';
import { todoReducer } from '../helpers/todoReducer';

const init = (): Todo[] => {
	try {
		const storedTodos = localStorage.getItem('todos');
		return storedTodos ? JSON.parse(storedTodos) : [];
	} catch (error) {
		console.error('Error al cargar datos desde localStorage:', error);
		return [];
	}
};

/**
 * Hook para obtener y manipular la lista de tareas pendientes.
 *
 * @param initialState Estado inicial de la lista de tareas pendientes.
 * @returns Un objeto con la lista de tareas pendientes y funciones de manipulación.
 */
export const useTodo = (
	initialState: Todo[] = [],
): {
	todos: Todo[];
	handleNewTodo: (newTodo: Todo) => void;
	handleToggle: (todoId: number) => void;
	handleDelete: (todoId: number) => void;
} => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = useCallback((newTodo: Todo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
	}, []);

	const handleToggle = useCallback((todoId: number) => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		});
	}, []);

	const handleDelete = useCallback((todoId: number) => {
		dispatch({
			type: 'delete',
			payload: todoId,
		});
	}, []);

	return {
		todos,
		handleNewTodo,
		handleToggle,
		handleDelete,
	};
};
