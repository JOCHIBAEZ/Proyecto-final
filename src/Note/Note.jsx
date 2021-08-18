import render from 'dom-serializer';
import React,{Component} from 'react';
import './Note.css'

class Note extends Component {
    constructor(props){
        super(props);
        this.noteContent= this.props.noteContent;
        this.noteid= this.props.noteid;
    }

    handlerRemove(id){
        alert('remove: ',id)
    }

    render(){
        return(
        <div className='Note'>
            <span 
                onClick={()=>{this.handlerRemove(this.noteid)}}
            >&times;</span>
            <p>{this.noteContent}</p>
        </div>
        )

    }   

}

export default Note;