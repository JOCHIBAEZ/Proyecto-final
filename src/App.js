import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'

class App extends Component{

  constructor(){
    super();
    this.state={
      notes:[
        {noteId: 1, noteContent: 'Josue Baez'},
        {noteId: 2, noteContent: 'Matricula: 2019-9070'}
      ]
    };
    this.addNote = this.addNote.bind(this);
  }

  removenote(noteid){
    
  }
  addNote(note){
    let {notes} = this.state;
    notes.push({
      noteId:notes.length+1,
      noteContent: note
    });
    this.setState({notes});
  }
  
  render(){
  return (
  <div className="notesContainer">
      
    <div className="notesHeader">
      <h1>Muro de Interaccion</h1>
    </div>
    <div className="notesBody">
      <ul>
      {
        this.state.notes.map(note=>{
          return(
            <Note
              noteContent={note.noteContent}
              noteId={note.noteId}
              key={note.noteId}
            />
          )              
        }
      )

      }
      </ul>
          </div>
          <div className="notesFooter">
            <NoteForm addNote={this.addNote}/>
          </div>
  </div>
    )};
};



export default App;
