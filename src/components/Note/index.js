import './index.scss';

function Note(props) {
	const { id, title, body, editNote, deleteNote } = props;

	return (
		<div className="Note">
			<div className="title">{title}</div>
			<div className="body">{body}</div>
			<div className="buttons">
				<button onClick={() => editNote(id)}>Edit</button>
				<button onClick={() => deleteNote(id)}>Delete</button>
			</div>
		</div>
	);
}

export default Note;
