import React, { Component } from 'react';

import Form from './Form';

import styles from './app.css'

import Ionicon from 'react-ionicons';

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      editing: false,
      save: false
    };

    this.renderNormal = this.renderNormal.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    let color;
    if (this.props.priority === '3') {
      color = 'alert alert-success';

    } else if (this.props.priority === '2') {
      color = 'alert alert-warning';

    } else {
      color = 'alert alert-danger'
    }
    this.setState({ color });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    let editTodo = {
      text: this.state.text,
      priority: this.state.priority
    };

    // console.log("update todo", editTodo);
    this.props.handleSubmit(editTodo);
  }

  renderNormal() {
    return (
      <div className={styles.app}>
        <div id="task" className={this.state.color} value={this.props.priority}>
          <input className="form-check-input" type="checkbox" />
          <text className="text-alert">{this.props.text}</text>
          <div id="icon">
            <Ionicon className="edit-todo" icon="ios-create-outline" onClick={() => this.setState({ editing: !this.state.editing })} />
            <Ionicon className="delete-todo" icon="md-trash" onClick={this.props.delete} />
          </div>
        </div>
      </div>
    )
  }

  renderEdit() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card" className={this.state.color}>
          <div className="card-body">
            <label>Description</label>
            <textarea className="create-todo-text"
              name="text"
              value={this.state.text}
              type="text"
              defaultValue={this.props.text}
              onChange={this.handleChange}>
            </textarea>
            <label><strong>Priority</strong></label>
            <div className="row">
              <select className="create-todo-alert"
                name="priority"
                value={this.state.priority}
                defaultValue={this.props.priority}
                onChange={this.handleChange}>
                <option className="alert alert-danger" value="1">High</option>
                <option className="alert alert-warning" value="2">Med</option>
                <option className="alert alert-success" value="3">Low</option>
              </select>
              <input className="btn btn-success" type="submit" value="Save"/>
            </div>
          </div>
        </div>
      </form>
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