import React from "react";

class TodoItem extends React.Component {
  // Create a state with properties: id, text, completed.
 constructor() {
   super();
   this.state = {
     id : 1,
     text : "Task 1",
     completed : true
   }

 }
  render() {
    const {text,completed} = this.state
    return (
      <div className="todo-item">
        {completed && <input type="checkbox" id="checkbox1" checked/>}
        {!completed && <input type="checkbox" id="checkbox1" /> }
        <label for="checkbox1">{text}</label>
      </div>
    );
  }
}

export default TodoItem;
