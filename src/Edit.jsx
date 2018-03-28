import React, { Component } from 'react';

import Form from './Form';
import Task from './Task';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange(this);
    this.handleSave = this.handleSave.bind(this);
  }

  onClick(){
    const edit = this.props.editTask;
  }

  editTask(){

  }
  


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
            <label>Description</label>
            <textarea className="create-todo-text" 
              name="text" 
              placeholder={this.props.text}
              value={this.state.text}
              type="text" 
              onChange={this.handleChange}>
            </textarea>  
            <label><strong>Priority</strong></label>         
            <select className="create-todo-alert"
              name="priority"
              value={this.state.priority}
              onChange={this.handleChange}>
            <option value="0">Select a Priority</option>
            <option className="alert alert-danger" value="1">High</option>
            <option className="alert alert-warning" value="2">Med</option>
            <option className="alert alert-success" value="3">Low</option>      
          </select> 
          <input className="btn btn-success btn-lg" type="submit" value="submit" handleSave={this.handleSave}/>    
      </form>
      ) 
  }
}

export default Edit;