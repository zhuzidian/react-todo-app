import { render } from "@testing-library/react";
import React from "react";

import TodoItem from './TodoItem'

class TodosList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} handleChange={this.props.handleChange} handleDelete={this.props.handleDelete}/>
        ))}
      </ol>
    )
  }
}

export default TodosList