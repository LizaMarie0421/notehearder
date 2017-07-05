import React from 'react'

import './Main.css';

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = () => {
//just needs to return what render would different from component of react
return(
    <div className="Main">
        <Sidebar/>
        <NoteList/>
        <NoteForm/>
    </div>
)
}

export default Main 