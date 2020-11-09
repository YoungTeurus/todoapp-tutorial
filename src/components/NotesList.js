import React from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const NotesList = ({notes, onRemove, onCheck}) => (
    <TransitionGroup component="ul" className="list-group">
      {notes.map(note => (
          <CSSTransition
              key = {note.id}
              classNames={'note'}
              timeout={800}
          >
            <li className="list-group-item todo-item">
              <div className={note.complete ? 'completed' : null}>
                <input type="checkbox" checked={note.complete || false} onChange={() => onCheck(note.id)}/>&nbsp;
                <strong>{note.title}</strong>
                <small>{note.date}</small>
              </div>

              <button type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => onRemove(note.id)}
              >&times;</button>
            </li>
          </CSSTransition>
      ))}
    </TransitionGroup>
)

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired
}

export default NotesList;