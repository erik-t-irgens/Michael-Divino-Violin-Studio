import logo from './logo.svg';
import './App.css';

// Try to implement some sort of hash router/history that allows for sections to be linked to and scrolled to automatically. https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
