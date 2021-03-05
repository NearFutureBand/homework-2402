import React from 'react';

class LoginForm extends React.Component {
  
  state = {
    email: '',
    password: '',
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value});
  }
  
  render () {
    return (
      <div>
        <input
          placeholder="ss"
          type="text"
          onChange={this.onChangeEmail}
          value={this.state.email}
        />
        <button onClick={() => this.setState({ email: '' })}>Clear</button>
      </div>
    );
  }
}

export default LoginForm;