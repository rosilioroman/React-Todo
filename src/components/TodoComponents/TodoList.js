import React from 'react';
import TodoItem from './Todo';
import './Todo.css';

// TodoList is a functional component that creates an array of TodoItem components.
// It accomplishes this by using the Array.map() method on the todoList array passed down from the App's state. 
// It iterates through the todoList array found in the state object and creates a <TodoItem /> instance for every item in the todoList array. 
const TodoList = props => {
    return (
        <ul>
            props.currentList.map(todoObj => {
                <TodoItem key={todoObj.id} todoItem={todoObj} completedHandler={props.completedHandler}/>
            })
        </ul>
    );
}

export default TodoList;