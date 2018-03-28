import React from 'react';

import Form from './Form';
import Task from './Task';

import styles from './app.css'

import Ionicon from 'react-ionicons';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [],  
      count: 0, 
    };

    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(todo) {
    let newTodo = {
      id: this.state.count++,
      text: todo.text,
      priority: todo.priority,
      editEnabled: true,
    };

    let newTasks = [...this.state.tasks, newTodo];
    // console.log("new tasks", newTasks);

    this.setState({ tasks: newTasks });
  }

  editTodo(newtodo){
    let updateTodo = {
      text: newtodo.text,
      priority: newtodo.priority
    }

    console.log("updateTodo", updateTodo);
    // const tasks = [...this.state.tasks];
    // this.setState({tasks: tasks});
  }

  deleteTodo(index){
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({tasks: tasks});
  }
  
  render() {
    let tasks = this.state.tasks.sort((a,b) => a.priority - b.priority);
    this.state.tasks.filter(task => task.editEnabled);
    tasks = (
      <div>
        { this.state.tasks.map((task, index) => {
          return <Task 
            handleSubmit={() => this.editTodo(index)}
            delete={() => this.deleteTodo(index)}
            key={task.id}
            text={task.text}
            priority={task.priority}
            editEnabled={task.editEnabled}
            />
        })}
      </div>
    )

    // <div>
    //  
    // </div>

  
    return (
      <div className='container'>
      <div className='header font-weight-light text-white'>
        <h2>Very Simple ToDo App</h2>
        <p id="p">Track all of the things</p>
        <hr/>
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
              {/* <div className="alert alert-primary">
                <p><strong>Welcome to Very Simple Todo App!</strong></p>
                <p>Get started now by adding a new todo on the left.</p>
              </div> */}
             {tasks}
             </div>
             </div>
          </div>
          
      </div>   
    );
  }
}

export default App;
