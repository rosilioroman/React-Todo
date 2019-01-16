import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
      todoItem: ''
    };
  }

  submitTodo = () => alert('submit clicked');

  clearTodo = () => alert('clear clicked');

  render() {
    return (
      <div className="App">
        <h1>Ro's Todo App</h1>
        <TodoForm currentList={this.state.todoList} submitBtnClick={this.submitTodo} clearBtnClick={this.clearTodo}/>
      </div>
    );
  }
}

export default App;