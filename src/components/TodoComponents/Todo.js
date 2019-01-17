import React from 'react';
import './Todo.css';

// TodoItem is a functional component that receives an object from the todoList array found in the app's state
// It returns a div element with a child element containing the itemName of the object passed down by TodoList
// The div element has a className called "todo-list-item" and a click event handler that calls a function passed down from App.js
// The div element also has a style attribute that is toggled on/off based on the value of the object's completed property.
const TodoItem = props => {
    return (
        <div className="todo-list-item" onClick={() => props.completedHandler(props.todoItem.id)} style={props.todoItem.completed ? {textDecoration: 'line-through'} : null}> 
            {props.todoItem.itemName}
        </div>
    );
}

export default TodoItem;