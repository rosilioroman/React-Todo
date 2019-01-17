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

  //prevents default event behavior (button click)
  //tempTodos stores the current state's todoList array
  //create the new todo item and push it onto the tempTodos array
  //set the state's todoList array equal to tempTodos, reset the todoItem property to an empty string
  submitTodo = e => {
    e.preventDefault(); 
    let tempTodos = this.state.todoList; 
    tempTodos.push({itemName: this.state.todoItem, completed: false, id: Date.now()}); 
    this.setState({todoList: tempTodos, todoItem: ''});
  };

  // completedStatusHandler is a method that changes the completed property of an object in this.state.todoList
  // It accomplishes this by mapping over the array and finding the object with a matching id to the one that was clicked.
  // if the object has a matching id, change the completed property to be the opposite of its current value.
  // Finally, update state with the new array containing the change.
  completedStatusHandler = id => {
    let tempTodos = this.state.todoList;
    tempTodos = tempTodos.map(todoObj => {
      if(todoObj.id === id) {
        todoObj.completed = !todoObj.completed;
        return todoObj;
      } else {
        return todoObj; //don't make changes if the id does not match
      }
    });
    this.setState({ todoList: tempTodos });
  }

  clearTodo = () => alert('clear clicked');

  render() {
    return (
      <div className="App">
        <h1>Ro's Todo App</h1>
        <TodoForm 
          value={this.state.todoItem} 
          submitBtnClick={this.submitTodo} 
          clearBtnClick={this.clearTodo} 
          inputChange={this.inputChangeHandler}
        />
        <TodoList 
          currentList={this.state.todoList} 
          completedHandler={this.completedStatusHandler}
        />
      </div>
    );
  }
}

export default App;