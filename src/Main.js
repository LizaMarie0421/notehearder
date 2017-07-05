import React from 'react'

import './Main.css';

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
//just needs to return what render would different from component of react
return(
    <div className="Main">
        <Sidebar/>
        <NoteList notes={props.notes}/>
        <NoteForm/>
    </div>
)
}

export default Main 