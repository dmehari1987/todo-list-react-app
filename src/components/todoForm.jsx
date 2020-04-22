import React, { Component } from 'react';
import shortid from 'shortid';

class TodoForm extends Component {
    state = { 
        text: ""
     }

     handleChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

     handleSubmit = (e) => {
         e.preventDefault();
         this.props.onSubmit({
             id: shortid.generate(),
             text: this.state.text,
             complete: false,
         })
         this.setState({text: ""})
     }

    render() { 
        return ( 
            <form onSubmit= {this.handleSubmit}>
                <input 
                    value= {this.state.text} 
                    name= "text"
                    placeholder= "todo..."
                    onChange={ this.handleChange} />
                    <button onClick= {this.handleSubmit}>add todo</button>
            </form>   
         );
    }
}
 
export default TodoForm;