import React from 'react'

import './Main.css';

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = ({notes, currentNote, setCurrentNote, resetCurrentNote}) => {
//just needs to return what render would different from component of react
return(
    <div className="Main">
        <Sidebar
            resetCurrentNote={resetCurrentNote}
        />
        <NoteList 
        notes={notes}
        setCurrentNote={setCurrentNote}
        />
        <NoteForm currentNote={currentNote}/>
    </div>
)
}

export default Main 