import logo from "./logo.svg";
import "./App.css";

function App() {
  const currentyear = new Date().getFullYear();

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
      <main>
        <h1>La mia prima applicazione in React</h1>
      </main>
      <footer>Copyright by Edgemony {currentyear}</footer>
    </div>
  );
}

export default App;
