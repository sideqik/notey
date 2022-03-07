import './index.scss';

function Header(props) {
	const { newNote, isCreatingNote } = props;
	return <div className="Header">
		<div className="brand">Notey</div>
		{!isCreatingNote &&
			<button onClick={newNote}>
				New +
			</button>
		}
	</div>;
}

export default Header;
