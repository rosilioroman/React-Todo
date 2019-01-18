import React from 'react';
import './Todo.css';

//TodoForm is a functional component that holds all user input. 
const TodoForm = props => {
    return (
        <form className="todo-form">
            <input type="text" placeholder="What do you need to do?" value={props.value} onChange={props.inputChange} name="todoItem"></input>
            <div className="btn-container">
                <button className="btn add-todo-btn" onClick={props.submitBtnClick}>Add Todo</button>
                <button className="btn clear-completed-btn" onClick={props.clearBtnClick}>Clear Completed Items</button>
            </div>
            <div className="clear-all-container">
                <button className="btn clear-all-btn" onClick={props.clearAllBtnClick}>Clear All Items</button>
            </div>
        </form>
    );
}

export default TodoForm;