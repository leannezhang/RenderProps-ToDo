import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ToDo from "./ToDo";

export class App extends React.Component {
  goalList = ({ tasks, newTask, done, add, change }) => {
    const renderTasks = tasks.map(task => {
      return (
        <li key={task.id} className={task.completed ? "Completed" : null}>
          {task.description}
          <input type="button" value="Done" onClick={done(task.id)} />
        </li>
      );
    });
    return (
      <div className="GoalSection">
        <h2>Goals</h2>
        <form>
          <label>
            New Goal
            <input type="text" value={newTask} onChange={change} />
          </label>
          <input type="button" value="Add" onClick={add} />
        </form>
        <ul>{renderTasks}</ul>
      </div>
    );
  };

  shoppingList = ({ tasks, newTask, done, add, change }) => {
    const renderTasks = tasks.map(task => {
      return (
        <li key={task.id} className={task.completed ? "Completed" : null}>
          {task.description}
          <input type="button" value="Done" onClick={done(task.id)} />
        </li>
      );
    });
    return (
      <div className="ShoppingSection">
        <h2>Shopping List</h2>
        <form>
          <label>
            New Shopping Item
            <input type="text" value={newTask} onChange={change} />
          </label>
          <input type="button" value="Add" onClick={add} />
        </form>
        <ul>{renderTasks}</ul>
      </div>
    );
  };
  render() {
    return (
      // The render prop gives us the state we need to render whatever we want here.
      <div>
        <h1>My Dashboard </h1>
        <div className="Dashboard">
          <ToDo render={this.goalList} />
          <ToDo render={this.shoppingList} />
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
