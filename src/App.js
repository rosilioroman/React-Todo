import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [{itemName: 'Eat', completed: false, id: 1}], //placeholder object is initially included in state to test if the components are working
      todoItem: ''
    };
  }

  // A method that captures user input.
  // Implemented in the TodoForm component's <input> element.
  inputChangeHandler = e => {
    this.setState({ todoItem: e.target.value });
  }

  submitTodo = e => {
    e.preventDefault(); //prevents default event behavior (button click)
    let tempTodos = this.state.todoList; //tempTodos stores the current state's todoList array
    tempTodos.push({itemName: this.state.todoItem, completed: false, id: Date.now()}); //create the new todo item and push it onto the tempTodos array
    this.setState({todoList: tempTodos, todoItem: ''}); //set the state's todoList array equal to tempTodos, reset the todoItem property to an empty string
  };

  clearTodo = () => alert('clear clicked');

  render() {
    return (
      <div className="App">
        <h1>Ro's Todo App</h1>
        <TodoForm value={this.state.todoItem} submitBtnClick={this.submitTodo} clearBtnClick={this.clearTodo} inputChange={this.inputChangeHandler}/>
        <TodoList currentList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;