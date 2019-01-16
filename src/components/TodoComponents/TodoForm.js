import React from 'react';

const TodoForm = props => {
    return (
        <form className="todo-form">
            <input type="text" placeholder="What do you need to do?" value={props.value} onChange={props.inputChange}></input>
            <button className="submit-btn" onClick={props.submitBtnClick}>Submit</button>
            <button className="clear-btn" onClick={props.clearBtnClick}>Clear List</button>
        </form>
    );
}

export default TodoForm;