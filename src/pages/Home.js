import React, {Fragment, useContext, useEffect} from 'react';
import {AddingForm} from "../components/AddingForm";
import NotesList from "../components/NotesList";
import {FirebaseContext} from "../context/firebase/FirebaseContext";
import {Loader} from "../components/Loader";

const Home = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
      <Fragment>
        <AddingForm/>

        <hr/>

        {loading
            ? <Loader/>
            : <NotesList notes={notes} onRemove={removeNote}/>
        }

      </Fragment>
  )
}

// Home.propTypes = {
//
// }

export default Home;