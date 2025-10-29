import logo from './holberton-logo.jpg';
import './App.css';
import {getFooterCopy, getFullYear} from './utils.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" autoComplete="Email" placeholder="Email"/>
        <label htmlFor="pswd">Password:</label>
        <input type="password" id="pswd" name="pswd" />
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}

export default App;
