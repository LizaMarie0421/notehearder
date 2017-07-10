import React, { Component } from 'react';
import base, {auth} from './base'

import './App.css';
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor(){
   //parent class of component 
    super()

    this.state = {
      notes: {},
      currentNote: this.blankNote(),
      uid: null,
    }
  }
    componentWillMount =()=>{
      this.getUserFromLocalStorage()
    auth.onAuthStateChanged(
      (user)=>{
        if (user){
          //signedIn
          this.handleAuth(user)
        } else {
          this.handleUnauth()
          //signedout
        }
      }
    )

  }

  getUserFromLocalStorage =()=>{
    const uid = localStorage.getItem('uid')
    if (!uid) return
    this.setState({uid})
  }
  syncNotes =() =>{
    this.bindingRef = base.syncState(
      `${this.state.uid}/notes`,
      {
        context: this,//object that has the state
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
    this.setState({ currentNote: note})
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
  signedIn =() => {
      return this.state.uid
    }
  handleAuth =(user) =>{
    localStorage.setItem('uid', user.uid)
    this.setState(
      {uid: user.uid},
      this.syncNotes
      )
  }
  handleUnauth =()=>{
    localStorage.removeItem('uid')
    if (this.bingingRef){
      base.removeBinding(this.bindingRef)
    }    
    this.setState({
      uid:null, 
      currentNote:this.blankNote(),
      notes:{},
    })
  }
  signOut =()=>{
    auth.signOut()
  }
  renderMain= () => {
      const actions = {
      //all methods passing as prop
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      deleteCurrentNote: this.deleteCurrentNote,
      signOut: this.signOut,
    }
    const noteData = {
      notes: this.state.notes,
      currentNote:this.state.currentNote,
    }
    return (
      <Main 
      {...noteData}
      {...actions}
      //spread syntax used to spread objects and array. pass in each prop as seperate arg. of function
      /> 
    )
  }
  render() {

    return (
      <div className="App">
      {this.signedIn() ? this.renderMain(): <SignIn/>}
      </div>
    );
  }
}

export default App;
