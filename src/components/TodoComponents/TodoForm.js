import React from 'react';

//TodoForm is a functional component that holds all user input. 
const TodoForm = props => {
    return (
        <form className="todo-form">
            <input type="text" placeholder="What do you need to do?" value={props.value} onChange={props.inputChange}></input>
            <button className="submit-btn" onClick={props.submitBtnClick}>Submit</button>
            <button className="clear-btn" onClick={props.clearBtnClick}>Clear Completed Items</button>
        </form>
    );
}

export default TodoForm;