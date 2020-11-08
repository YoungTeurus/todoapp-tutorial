import React from 'react';
import PropTypes from 'prop-types';

const NotesList = ({notes, onRemove}) => (
    <ul className="list-group">
      {notes.map(note => (
          <li className="list-group-item todo-item" key={note.id}>
            <div>
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>

            <button type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onRemove(note.id)}
            >&times;</button>
          </li>
      ))}
    </ul>
)

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired
}

export default NotesList;