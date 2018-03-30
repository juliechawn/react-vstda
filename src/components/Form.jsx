import React, { Component } from 'react';
import Task from './Task';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState ({
      [event.target.name]: event.target.value,   
    });
  }

  handleSubmit(event) {
    event.preventDefault();    
    if (this.state.text === '') {
      return false;
    }

    let newTodo = {
      text: this.state.text,
      priority: this.state.priority,
    };

    this.props.onAddTodo(newTodo);
    this.setState({text: '', priority: '0'})
  }

  render() {  
    return (
      <form onSubmit={this.handleSubmit}>  
      <div className='card'> 
        <div className="card-body">
          <label><strong>I want to..</strong></label>
          <textarea className="create-todo-text" 
            name="text" 
            placeholder="Enter a task" 
            value={this.state.text}
            type="text" 
            onChange={this.handleChange}>
          </textarea>          
          <label><strong>How much of a priority is this?</strong></label>         
          <select className="create-todo-alert"
              name="priority"
              value={this.state.priority}
              onChange={this.handleChange}>
            <option value="0">Select a Priority</option>
            <option className="alert alert-danger" value="1">High</option>
            <option className="alert alert-warning" value="2">Med</option>
            <option className="alert alert-success" value="3">Low</option>      
          </select>
        </div> 
        <div className="card-footer">
          <input className="btn btn-success btn-lg btn-block" type="submit" value="Submit"/>    
        </div> 
      </div>                                    
    </form>
  )
}
};

export default Form;