import React from 'react';
import PropTypes from 'prop-types';

const NotesList = ({notes}) => {

  return (
      <ul className="list-group">
        {notes.map(note => (
            <li className="list-group-item todo-item" key={note.id}>
              <div>
                <strong>{note.title}</strong>
                <small>{new Date().toLocaleDateString()}</small>
              </div>

              <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
            </li>
        ))}
      </ul>
  )
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NotesList;