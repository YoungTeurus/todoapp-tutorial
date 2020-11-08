import React from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const NotesList = ({notes, onRemove}) => (
    <TransitionGroup component="ul" className="list-group">
      {notes.map(note => (
          <CSSTransition
              key = {note.id}
              classNames={'note'}
              timeout={800}
          >
            <li className="list-group-item todo-item">
              <div>
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
  onRemove: PropTypes.func.isRequired
}

export default NotesList;