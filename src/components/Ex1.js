import React from 'react';

class Checkbox extends React.Component {
  
  state = {
    value: false
  }

  //change = () => this.state.value === 'X' ? this.setState({value: 'V'}) : this.setState({value: 'X'})


  change = () => {
    this.setState({ value: !this.state.value });
  }

  render () {
    return <div onClick = {this.change} style ={{fontSize: '25px', textAlign: 'center'}}>{this.state.value ? 'V' : 'X'}</div>
  }
}

export default Checkbox;