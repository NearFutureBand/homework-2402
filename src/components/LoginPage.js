import './App.css';
import React, { useState, Component } from 'react';
import axios from 'axios';
import './App.css';

class LoginPage extends Component {

  state = {
    phone: '',
    password: '',
    user: null,
    error: ''
  }

  componentDidUpdate = async (prevProps, prevState) => {
    console.log(prevState, this.state);
    if (
      this.state.phone.length === 12 &&
      (prevState.password.length === 2 || prevState.password.length === 0) &&
      this.state.password.length === 3
    ) {
      console.log('Request');
      try {
        const response = await axios.post('http://localhost:3001/auth/sign-in', {
          phone: this.state.phone,
          password: this.state.password
        });
        this.setState({ user: response.data, phone: '', password: '' });
      } catch (err) {
        console.log(err.response);
        this.setState({ error: err.response.data });
      }
    }
  }

  onLogin = async () => {
    
  }

  onChangeCredentials = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value, error: '' });
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="phone number"
          onChange={(event) => this.onChangeCredentials(event, 'phone')}
          value={this.state.phone}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => this.onChangeCredentials(event, 'password')}
          value={this.state.password}
        />
        <div>
          {this.state.user && (
            <span>{this.state.user.name.first} {this.state.user.name.last}</span>
          )}
        </div>
        <div>{this.state.error}</div>
      </div>
    );
  }
}

export default LoginPage;
