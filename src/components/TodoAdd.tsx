import { useForm } from '../hooks/useForm';

type TodoAddProps = {
	handleNewTodo: (newTodo: Todo) => void;
};

interface FormData {
	desc: string;
}

export const TodoAdd = ({ handleNewTodo }: TodoAddProps) => {
	const { onInputChange, desc, onResetForm } = useForm<FormData>({
		desc: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const trimmedInput = desc.trim();
		if (trimmedInput.length <= 1) return;
		handleNewTodo({
			id: new Date().getTime(),
			desc: trimmedInput,
			done: false,
		});
		onResetForm();
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='form-control'
				placeholder='What to do?'
				name='desc'
				value={desc}
				onInput={onInputChange}
			/>
			<button className='btn btn-outline-primary mt-1 btn-block' type='submit'>
				Add
			</button>
		</form>
	);
};
