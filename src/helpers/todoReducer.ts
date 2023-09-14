/**
 * Reducer function to manage the list of todos.
 * @param initialState Initial state (list of todos)
 * @param action Action to perform on the state
 * @returns New state (list of todos)
 */
export const todoReducer = (
	initialState: Todo[] = [],
	action: ActionType,
): Todo[] => {
	switch (action.type) {
		case 'add':
			// Add a new todo to the state, maintaining immutability.
			return [...initialState, action.payload];

		case 'delete':
			// Delete a todo from the state, maintaining immutability.
			return initialState.filter((todo) => todo.id !== action.payload);

		case 'toggle':
			// Toggle the 'done' state of a todo, maintaining immutability.
			return initialState.map((todo) =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
			);

		default:
			return initialState;
	}
};
