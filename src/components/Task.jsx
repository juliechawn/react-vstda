import React, { Component } from 'react';

import Form from './Form';
import TaskList from './TaskList'

import Ionicon from 'react-ionicons';
import styles from '../app.css'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.task.text,
      priority: this.props.task.priority,
      index: this.props.task.index,
      editEnabled: false,
    };

    this.renderNormal = this.renderNormal.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.onClickDeleteTodo = this.onClickDeleteTodo.bind(this);
  }

  getPriority() {
    switch (this.state.priority) {
      case "3":
        return "list-group-item-success";
      case "2":
        return "list-group-item-warning";
      case "1":
        return "list-group-item-danger";
      case "4":
        return " disabled"
    }
  }

  handleChangeText(event) {
    var index = parseInt(this.props.index);
    var text = event.target.value;
    this.props.updateText(index, text);
    this.setState({text});
  }

  handleChangePriority(event) {
    var index = parseInt(this.props.index);
    var priority = event.target.value;
    this.props.updatePriority(index, priority);
    this.setState({priority});
  }

  onClickDeleteTodo(){
    var index = parseInt(this.props.index);
    this.props.deleteTodo(index);
  }

  renderNormal() {
    return (
      <div>
        <div id="task" className={`list-group-item ${this.getPriority()}`} value={this.props.priority}>
          <input type="checkbox" />
          <text>{this.props.text}</text>
          <span className="float-right">
            <Ionicon className="edit-todo" icon="ios-create-outline" onClick={() => this.setState({ editing: !this.state.editing })}/>
            <Ionicon className="delete-todo" icon="md-trash" onClick={this.onClickDeleteTodo} />
          </span>
        </div>
      </div>
    )
  }

  renderEdit() {
    return (
      <div className={styles.app}>
        <div className="card" className={`list-group-item ${this.getPriority()}`}>
          <div className="card-body">
            <label>Description</label>
            <textarea className="create-todo-text"
              name="newText"
              value={this.props.newText}
              type="text"
              defaultValue={this.props.text}
              onChange={this.handleChangeText}>
            </textarea>
            <label><strong>Priority</strong></label>
            <div className="buttons">
              <select className="create-todo-alert"
                name="newPriority"
                value={this.state.newPriority}
                defaultValue={this.props.priority}
                onChange={this.handleChangePriority}>
                <option className="alert alert-danger" value="1">High</option>
                <option className="alert alert-warning" value="2">Medium</option>
                <option className="alert alert-success" value="3">Low</option>
              </select>
              <input className="btn btn-success btn-lg" type="submit" value="Save" onClick={() => this.setState({ editing: !this.state.editing })}/>
              <input className="btn btn-danger btn-lg" type="submit" value="Cancel" onClick={() => this.setState({ editing: !this.state.editing })}/>
            </div>
          </div>
        </div>
        </div>
    )
  }


  render() {
    return (
      <div>
        {this.state.editing ? this.renderEdit() : this.renderNormal()}
      </div>
    )
  }
};


export default Task;
