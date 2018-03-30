import React, { Component } from 'react';

import Form from './components/Form';
import Task from './components/Task';
import TaskList from './components/TaskList';

import Ionicon from 'react-ionicons';
import styles from './app.css'

let counter = 0;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateText = this.updateText.bind(this);
    this.updatePriority = this.updatePriority.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(todo) {
    let newTodo = {
      id: counter++,
      text: todo.text,
      priority: todo.priority,
    };

    let newTasks = [...this.state.tasks, newTodo];
    this.setState({ tasks: newTasks });
  }

  updateText(index, text) {
    let tasks = [...this.state.tasks];
    tasks[index].text = text;
    this.setState({tasks: tasks})
  }

  updatePriority(index, priority) {
    let tasks = [...this.state.tasks];
    tasks[index].priority = priority;
    this.setState({tasks: tasks})
  }

  deleteTodo(index){
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({tasks: tasks});
  }

  render() {
    let header;
    if (this.state.tasks.length === 0) {
      header = (
        <div style={{ marginBottom: 0 }} className="alert alert-info">
          {" "}
          <strong>
            <p>Welcome to Very Simple Todo App</p>
          </strong>
          <p>Get started now by adding a new todo on the left.</p>
        </div>
      );
    }
    return (
      <div className='container-fluid'>
        <div className='header font-weight-light text-white'>
          <h2>Very Simple ToDo App</h2>
          <p id="p">Track all of the things</p>
          <hr />
        </div>
        <div className='row'>
          <div className='col-4'>
            <Form
              onAddTodo={this.addTodo}
            />
          </div>
          <div className='col-8'>
            <div className='card'>
              <div className='card-header'>View ToDos</div>
              {header}
              <TaskList 
                tasks={this.state.tasks}
                handleEdit={this.editTodo}   
                updateText={this.updateText}
                updatePriority={this.updatePriority}   
                deleteTodo={this.deleteTodo}
              />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;

