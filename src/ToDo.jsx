import React from "react";
import PropTypes from "prop-types"; // ES6

export default class ToDo extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };

  state = {
    tasks: [],
    newTask: ""
  };

  _handleChangeNewTask = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  _handleClickAdd = () => {
    if (this.state.newTask !== "") {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            id: this.state.tasks.length,
            description: this.state.newTask,
            completed: false
          }
        ]
      });
    }
  };

  _handleClickDone = taskId => () => {
    const updatedTasks = [...this.state.tasks];
    const competedTaskIndex = this.state.tasks.findIndex(
      task => task.id === taskId
    );
    updatedTasks[competedTaskIndex].completed = true;

    this.setState({
      tasks: updatedTasks
    });
  };

  render() {
    const { render } = this.props;

    return render({
      ...this.state,
      done: this._handleClickDone,
      add: this._handleClickAdd,
      change: this._handleChangeNewTask
    });
  }
}
