import React from 'react';
import './Todo.css';

//TodoForm is a functional component that holds all user input. 
const TodoForm = props => {
    return (
        <form className="todo-form">
            <input type="text" placeholder="What do you need to do?" value={props.value} onChange={props.inputChange}></input>
            <div className="btn-container">
                <button className="btn submit-btn" onClick={props.submitBtnClick}>Add Todo</button>
                <button className="btn clear-btn" onClick={props.clearBtnClick}>Clear Completed Items</button>
            </div>
        </form>
    );
}

export default TodoForm;