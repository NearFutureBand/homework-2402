import logo from './logo.svg';
import Checkbox from './components/Ex1';
import Textcomp from './components/Ex2';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Checkbox />
      <Checkbox />
      <Textcomp
        color="red"
        size="20px"
        text="ЧЧЧЧЧ"
      />
      <Textcomp color="blue" size="10px" />
      <Textcomp color="black" space="100px" text="вфывфыв"/>
      <Textcomp color="blue" text="" />
    </div>
  );
}

export default App;
