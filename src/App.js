import { useState } from 'react';

// Styles
import './App.scss';

// Test data
import testData from './testData';

// Components
import Header from './components/Header';
import Note from './components/Note';
import New from './components/New';
import Edit from './components/Edit';

function App() {
	const [notes, setNotes] = useState([...testData]);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [isCreatingNote, setIsCreatingNote] = useState(false);

  const findNoteById = (id) => notes.find((note) => note.id === id);

  const newNote = () => {
    setIsCreatingNote(true);
  };

  const createNote = (e) => {
    setIsCreatingNote(false);
  };

  const editNote = (id) => {
    const foundNote = findNoteById(id);
    setNoteToEdit(foundNote);
  };

  const updateNote = (e) => {
    setNoteToEdit(null);
  };

  const deleteNote = (id) => {
    const foundNote = findNoteById(id);
    setNotes([foundNote]);
  };

	return (
		<div className="App">
      <Header newNote={newNote} isCreatingNote={isCreatingNote} />
			{isCreatingNote && <New createNote={createNote} />}
			{noteToEdit && <Edit note={noteToEdit} updateNote={updateNote} />}
			{!noteToEdit && !isCreatingNote && (
				<div className="Notes">
					{notes.map((note) => (
						<Note
							id={note.id}
							body={note.body}
							editNote={editNote}
							deleteNote={deleteNote}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
