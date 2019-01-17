import React from 'react';

//TodoItem is a functional component that simply returns a div element with a text node containing the itemName of the object passed down by TodoList
const TodoItem = props => {
    return <div className="todo-list-item">{props.text}</div>
}

export default TodoItem;