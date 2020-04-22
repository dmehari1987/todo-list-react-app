import React from 'react';

export default props => 
        <div style= {{ display: "flex", justifyContent: "flex-start" }}>
            <div 
                style= {{textDecoration: props.todo.complete ? "line-through" : ""}} 
                onClick= {props.toggleComplete}
            >
                    {props.todo.text}
            </div>
            <button style= {{marginLeft: 5}} onClick= { props.onDelete}>X</button>
        </div>
