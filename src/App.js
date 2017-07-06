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
         currentNote:{
        id: null,
        title:'',
        body:'',
      
      }
    }
  }
  setCurrentNote= (note) => {
    this.setState({currentNote: note})
  }


  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes}
        currentNote={this.state.currentNote}
        setCurrentNote={this.setCurrentNote()}
        /> 
      </div>
    );
  }
}

export default App;
