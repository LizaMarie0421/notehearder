import React, { Component } from 'react';
import base from './base'

import './App.css';
import Main from './Main'

class App extends Component {
  constructor(){
   //parent class of component 
    super()

    this.state = {
      notes: {},
      currentNote: this.blankNote(),
    }
  }
  componentDidMount =() =>{
    base.syncState(
      'notes',
      {
        conext: this,//object that has the state
        state: 'notes', //which prop the state to sync with firebase
      }
    )
  }
  blankNote = () => {
    return{
        id: null,
        title:'',
        body:'',
    }
  }

  setCurrentNote=(note) => {
    this.setState({currentNote: note})
  }

  resetCurrentNote=()=>{
  this.setCurrentNote(this.blankNote())
}

  saveNote =(note)=>{
    const notes = {...this.state.note}//copies the objects
    if (!note.id){
      note.id = Date.now()
    }
    notes[note.id]= note
    this.setState({notes})
    this.setCurrentNote(note) 
  }
  deleteCurrentNote =()=>{
    const notes = {...this.state.notes}
    notes[this.state.currentNote.id] = null
    this.setState({notes})
    this.resetCurrentNote({notes})

  }
  render() {
    const actions = {
      //all methods passing as prop
      setCurrentNote: this.currentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      deleteCurrentNote: this.deleteCurrentNote,
    }
    const noteData = {
      notes: this.state.notes,
      currentNote:this.state.currentNote,
    }
    return (
      <div className="App">
        <Main 
        {...noteData}
        {...actions}
        //spread syntax used to spread objects and array. pass in each prop as seperate arg. of function
        /> 
      </div>
    );
  }
}

export default App;
