import React, {Component} from 'react';
import TodoForm from './todoForm';
import Todo from './todo';
import './toDo.css'

class TodosList extends Component {
    state = { 
        todos: [],
        todoToShow: 'All'
     }

    addTodos = (todo) => {
        this.setState({ todos: [todo, ...this.state.todos] });
    }

    toggleComplete = (id) => { 
        this.setState({todos: this.state.todos.map(
            todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                }else {
                    return todo;
                }
            }
        )})
    }

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }

    handleDelete = (id) => {
        const undeletedTodos = [...this.state.todos];
        const filtered = undeletedTodos.filter(t => t.id !== id)
        this.setState({todos: filtered})
    }

    handleDeleteComplete = () => {
        this.setState({todos: this.state.todos.filter(todo => !todo.complete)})
    }

    // handleToggleAll = () => {
    //     const toggled = this.state.todos.map(todo => 
            
    //         id: todo.id,
    //         text: todo.text,
    //         complete: !todo.complete
    //     )
    //     this.setState({todos: toggled})
    // }

    render() { 
        let todos = [];

        if (this.state.todoToShow === 'All'){
            todos = this.state.todos;
        }else if (this.state.todoToShow === 'Active'){
            todos = this.state.todos.filter(todo=> !todo.complete)
        }else if(this.state.todoToShow === 'Deleted') {
            todos = this.state.todos.filter(todo=> todo.complete)
        }

        return ( 
            <div className= "todo-item">
                <TodoForm onSubmit= {this.addTodos}/>
                {todos.map(todo => (
                <Todo 
                                key= {todo.id} 
                                id= {todo.id} 
                                toggleComplete= {()=> this.toggleComplete(todo.id)} 
                                onDelete= {() => this.handleDelete(todo.id)}
                                todo= {todo} />))}
                <hr />
                <div>todos left: {this.state.todos.filter(todo => !todo.complete).length} </div>
                <div>
                    <button onClick ={() => this.updateTodoToShow('All')} >Show All</button>
                    <button onClick ={() => this.updateTodoToShow('Active')}>Show Active</button>
                    <button onClick ={() => this.updateTodoToShow('Deleted')}>Show Deleted</button>
                </div>
                {this.state.todos.some(todo=> todo.complete) ? (<div>
                    <button 
                        onClick= {this.handleDeleteComplete} 
                        style= {{margin: 3, justifyContent: "center"}} 
                        >
                            Clear All Complete
                    </button>
                </div>): ""}
            </div>
         );
    }
}
 
export default TodosList;
 

