// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoItem from './Todo';

const TodoList = props => {
    return (
        props.currentList.map(todoObj => {
            return <TodoItem key={todoObj.id} text={todoObj.itemName}/>
        })
    );
}

export default TodoList;