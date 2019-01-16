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
      todoList: [{itemName: 'Eat', id: 1}], //placeholder item is initially included in state to test if the components are working
      todoItem: ''
    };
  }

  inputChangeHandler = e => {
    this.setState({ todoItem: e.target.value }); //capture user input from the TodoForm component's <input> element
  }

  submitTodo = e => {
    e.preventDefault(); //prevents default event behavior (button click)
    let tempTodos = this.state.todoList; //store the current state's todoList array
    tempTodos.push({itemName: this.state.todoItem, id: Date.now()}); //push the new todo item onto tempTodos array
    this.setState({todoList: tempTodos, todoItem: ''}); //update state
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