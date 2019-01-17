// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoItem from './Todo';

// TodoList is a functional component that creates an array of TodoItem components.
// It accomplishes this by using the Array.map() method on the todoList array passed down from the App's state. 
// It iterates through the todoList array found in the state object and creates an TodoItem instance for every item in the todoList array. 
// Each TodoItem component that is created by TodoList is given a key prop set to the object's id property and a text prop set the object's itemName property.
const TodoList = props => {
    return (
        props.currentList.map(todoObj => {
            return <TodoItem key={todoObj.id} text={todoObj.itemName}/>
        })
    );
}

export default TodoList;