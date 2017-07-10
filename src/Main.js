import React from 'react'

import './Main.css';

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
//just needs to return what render would different from component of react
return(
    <div className="Main">
        <Sidebar
            resetCurrentNote={props.resetCurrentNote}
            signOut={props.signOut}
        />
        <NoteList 
        notes={props.notes}
        setCurrentNote={props.setCurrentNote}
        />
        <NoteForm 
        currentNote={props.currentNote}
        saveNote={props.saveNote}
        deleteCurrentNote={props.deleteCurrentNote}
        />
    </div>
)
}

export default Main 