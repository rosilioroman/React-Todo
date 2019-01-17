import React from 'react';

// TodoItem is a functional component that receives an object from the todoList array found in the app's state
// It returns a div element with a child containing the itemName of the object passed down by TodoList
// The div element has a className called "todo-list-iem" and a click event handler that calls a function passed down from App.js
const TodoItem = props => {
    return (
        <div className="todo-list-item" onClick={() => props.completedHandler(props.todoItem.id)}> 
            {props.todoItem.itemName}
        </div>
    );
}

export default TodoItem;