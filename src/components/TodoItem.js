import React from 'react';

// class TodoItem extends React.Component {
//   render() {
//     return (
//       <li>{this.props.todo.title}</li>
//     )
//   }
// }

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { id, completed, title } = props.todo

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChange(id)}
      />

      <button onClick={() => props.handleDelete(id)}>
        X
      </button>

      <span style={ completed ? completedStyle : null }>
        {title}
      </span>
    </li>
  )
}

export default TodoItem
