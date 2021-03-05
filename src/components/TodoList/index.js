import React, { Component } from 'react';
import initialItems from './initialItems.json';
import './styles.css';

class TodoList extends Component {

  state = {
    todoItems: initialItems, // массив тудушек
    newItem: '' // то что сейчас в инпуте
  }

  onChangeText = (event) => {
    this.setState({ newItem: event.target.value });
  }

  onAddItem = () => {
    const newItems = [...this.state.todoItems];

    const newTodoItem = {
      id: this.state.todoItems.length,
      text: this.state.newItem
    }

    newItems.push(newTodoItem);

    this.setState({ todoItems: newItems, newItem: '' });
  }

  render () {
    return (
      <div className="todo-container">
        {this.state.todoItems.map((item) => {
          return <div key={item.id}>{item.text}</div>
        })}
        <input type="text" onChange={this.onChangeText} value={this.state.newItem} />
        <button onClick={this.onAddItem}>Add</button>
      </div>
    )
  }
}

export default TodoList;