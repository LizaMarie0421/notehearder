import React, { Component } from 'react'

import './NoteForm.css';
import RichtTextEditor from 'react-rte'

class NoteForm extends Component {
  state = {
    editorValue: RichtTextEditor.createEmptyValue()
  }
    handleChanges =(ev)=>{
        const note = {...this.props.currentNote}
        note[ev.target.name] = ev.target.value

        this.props.saveNote(note)
    }
    handleEditorChanges =(editorValue)=>{
      this.setState({editorValue})

      const note = {...this.props.currentNote}
      note.body= editorValue.toString('html')

      this.props.saveNote(note)
    }
  render() {
      const {currentNote}=this.props

    return (
        <div className="NoteForm">
          <div className="form-actions">
            <button 
            type="button"
            onClick={this.props.deleteCurrentNote}
            ><i className="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input 
              type="text" 
              name="title" 
              placeholder="Title your note"
              value= {currentNote.title}//one-way binding cannot change input but can trigger change event
              onChange={this.handleChanges}
              />
            </p>
            <RichtTextEditor
            name="body" 
            value= {this.state.editorValue}
            onChange={this.handleEditorChanges}            
            ></RichtTextEditor>
          </form>
        </div>
    )
  }
}

export default NoteForm
