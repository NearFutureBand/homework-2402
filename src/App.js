import { Component } from 'react';

import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import LoginForm from './components/LoginForm';
import './App.css';

// home, about, contacs

class App extends Component {

  state = {
    currentPage: 'home'
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'home': {
        return <PageHome />
      }
      case 'about': {
        return <PageAbout />
      }
      case 'contacts': {
        return <PageContacts />
      }
    }
  }

  goToRoute = (nextRoute) => {
    this.setState({ currentPage: nextRoute });
  }

  render () {
    return (
      <div>
        <button onClick={() => this.goToRoute('home') }>Home</button>
        <button onClick={() => this.goToRoute('about')}>About</button>
        <button onClick={() => this.goToRoute('contacts')}>Contacts</button>
        {this.renderPage()}
      </div>
    )
  }
}

const PageAbout = () => {
  return <div className="page">About</div>
}

const PageHome = () => (
  <div className="page">
    <div>Home</div>
  </div>
)

const PageContacts = () => <div className="page">Contacts</div>;

export default App;
