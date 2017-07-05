import React from 'react'

import './NoteList.css'
import Note from './Note'


const NoteList =() => {
    const notes ={
        'note-1':{
        id: 'note-1',
        title:'My Fancy Note',
        body: 'This Note is so Fancy!',
    },
         'note-2':{
        id: 'note-2',
        title:'Anotha one',
        body: 'also Fancy!',
        },   

    }
//array of note 1 and note 2 
    const noteIds = Object.keys(notes)
    return(
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
              {noteIds.map(noteId => <Note note={notes[noteId]}/>)}

          </ul>
        </div>
    )
}

export default NoteList