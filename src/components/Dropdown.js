import React, { Component } from 'react';

class Dropdown extends Component {

  ingredients = [
    { text: 'bbbbbbb', id: 'd'},
    { text: 'ааааааa', id: 'a'},
    { text: 'eeeeeee', id: 'b'},
    { text: 'ccccccc', id: 'c'},
    { text: 'bbbbbbb', id: 'e'}
  ];

  state = {
    opened: false
  }

  onToggle = () => {
    this.setState({ opened: !this.state.opened });
  }

  render () {
    return (
      <div>
        <button onClick={this.onToggle}>Ингредиенты {this.state.opened ? '🔺' : '🔻'} </button>
        { this.state.opened && this.ingredients.map((item) => {
          return <div key={item.id}>{item.text}</div>
        })}

        {this.state.opened && (<div>Что-нибудь</div>)}
      </div>
    );
  }
}

export default Dropdown;