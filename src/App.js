import logo from './logo.svg';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Dropdown from './components/Dropdown';
import './App.css';

function App() {
  return (
    <>
      <Ex1 />
      <Ex2 />
      {/*<Ex3 />*/}
      <Dropdown />
      <PlayerButton />
      <Ex1 />
    </>
  );
}

export default App;
