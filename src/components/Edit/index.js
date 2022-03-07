import './index.scss';

function Edit(props) {
	const { note, updateNote } = props;

	return (
		<form className="Edit" onSubmit={updateNote}>
			<div className="input-container">
				<label htmlFor="title">Title</label>
				<input type="text" name="title" defaultValue={note.title} />
			</div>
			<div className="input-container">
				<label htmlFor="body">Body</label>
				<textarea
					name="body"
					cols="30"
					rows="10"
					defaultValue={note.body}
				></textarea>
			</div>
			<div className="buttons">
				<button type="submit">Update</button>
				<button type="button">Cancel</button>
			</div>
		</form>
	);
}

export default Edit;
