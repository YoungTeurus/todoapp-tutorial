import React, {Fragment, useContext, useEffect} from 'react';
import {AddingForm} from "../components/AddingForm";
import NotesList from "../components/NotesList";
import {FirebaseContext} from "../context/firebase/FirebaseContext";
import {Loader} from "../components/Loader";

const Home = () => {
  const {loading, notes, fetchNotes, removeNote, changeNote} = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  const changeNoteCompleteness = id => {
    notes.map(note => {
      if (note.id === id){
        note.complete = !note.complete;
        changeNote(note);
      }
    })
  }

  return (
      <Fragment>
        <AddingForm/>

        <hr/>

        {loading
            ? <Loader/>
            : <NotesList notes={notes} onRemove={removeNote} onCheck={id => changeNoteCompleteness(id)}/>
        }

      </Fragment>
  )
}

// Home.propTypes = {
//
// }

export default Home;