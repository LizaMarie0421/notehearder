import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
  constructor(){
   //parent class of component 
    super()

    this.state = {
      notes: {
        'note-1':{
        id: 'note-1',
        title:'My Fancy Note from app',
        body: 'This Note is so Fancy!',
      },
         'note-2':{
        id: 'note-2',
        title:'Anotha one from app',
        body: 'also Fancy!',
      },  
      }, 
         currentNote: this.blankNote()
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
  render() {
    const actions = {
      //all methods passing as prop
      setCurrentNote: this.currentNote,
      resetCurrentNote: this.resetCurrentNote,
    }
    const noteData = {
      notes: this.notes,
      currentNote:this.currentNote,
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
