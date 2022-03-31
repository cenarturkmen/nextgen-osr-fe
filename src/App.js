import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
function App() {
  if (localStorage.getItem('isLoggedIn') && localStorage.getItem('isLoggedIn') === 'true') {
    return (
      <div className="App">
        <Navbar />
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
  } else {
    window.location.href = '/login';
    return <p> hello</p>;
  }
}

export default App;
