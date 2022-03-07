import './index.scss';

function New(props) {
	const { createNote } = props;

	return (
		<form className="New" onSubmit={createNote}>
			<div className="input-container">
				<label htmlFor="title">Title</label>
				<input type="text" name="title" />
			</div>
			<div className="input-container">
				<label htmlFor="body">Body</label>
				<textarea name="body" cols="30" rows="10"></textarea>
			</div>
			<div className="buttons">
				<button type="submit">Create</button>
				<button type="button">Cancel</button>
			</div>
		</form>
	);
}

export default New;
