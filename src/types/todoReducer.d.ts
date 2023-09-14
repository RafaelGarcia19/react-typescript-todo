interface Todo {
	id: number;
	desc: string;
	done: boolean;
}

type ActionType =
	| { type: 'add'; payload: Todo }
	| { type: 'delete'; payload: number }
	| { type: 'toggle'; payload: number };
