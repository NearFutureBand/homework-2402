import './App.css';
import React, { useState, Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    users: [],
    number: 0
  }

  onLoadUsers = async () => {

    /*axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users').then((response) => {
      console.log(response.data);
      this.setState({ users: response.data });
    }).catch((error) => {
      console.log(error);
    });*/

    try {
      const response = await axios.get("https://serverless-backend-ky9b8rmuq.now.sh/api/users")
      console.log(response);
      this.setState({ users: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onLoadUsers}>Load users</button>
        {this.state.users.map(({ _id, name: { first, last } }) => {
          return <div key={_id}>{first} {last}</div>
        })}
      </div>
    );
  }
}

const App2 = () => {

  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber(number + 1);
  }

  const minus = () => {
    setNumber(number - 1);
  }

  const onLoadUsers = async () => {
    try {
      const response = await axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users')
      console.log(response);
      
      setUsers(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">   
      <button onClick={plus}>+</button>
      {number}
      <button onClick={minus}>-</button>
      <button onClick={onLoadUsers}>Load users</button>
      {users.map(({ _id, name: { first, last } }) => {
        return <div key={_id}>{first} {last}</div>
      })}
    </div>
  );
}


export default App2;
