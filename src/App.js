import React, { Component } from 'react';

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
  blankNote = () => {
    return{
        id: null,
        title:'',
        body:'',
    }
  }

  setCurrentNote= (note) => {
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
    this.setState({
      notes,
      currentNote: note,
    }) // same as {notes:notes}
  }
  render() {
    const actions = {
      //all methods passing as prop
      setCurrentNote: this.currentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
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
