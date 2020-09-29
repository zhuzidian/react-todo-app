import React from 'react'

class TodoInput extends React.Component {
  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addTodoItem(this.state.title)

    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.handleChange}
          className="input-text"
        />
        <input type="submit" value="Submit" className="input-submit" />
      </form>
    )
  }
}

export default TodoInput