import React from 'react'

import Header from './Header'
import TodosList from "./TodosList";
import TodoInput from './TodoInput'

import { v4 as uuid } from 'uuid'

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuid(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuid(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  handleChange = (id) => {
    console.log('clicked', id);

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  handleDelete = (id) => {
    console.log('delete', id)

    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  addTodoItem = (title) => {
    console.log(title)

    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <TodoInput addTodoItem={this.addTodoItem}/>
        <TodosList
          todos={this.state.todos}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default TodoContainer