import React, { Component } from 'react';

import Task from './Task';

class TaskList extends Component {
  
  render() {
    let tasks = this.props.tasks.sort((a,b) => a.priority - b.priority);
    tasks = this.props.tasks.map((task, index) => {
      return ( 
        <Task
          task={task}
          key={task.id}
          text={task.text}
          index={index}
          priority={task.priority}
          updateText={this.props.updateText}
          updatePriority={this.props.updatePriority}
          deleteTodo={this.props.deleteTodo}
          />
          );
        });
    return (
      <div>
        <div style={{ marginBottom: 0 }}>{tasks}</div>
      </div>
    );
  }
}

export default TaskList;