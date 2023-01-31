import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';

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


function Testcomponent(){
  return ( <div>Hello skrt skrt</div>)
}

function Header(){
  return(<div>
    <h1>PEN Ogre done</h1>
  </div>)
}

function Description(){
  return(<p>Kasoran is truly a gamer skrrrra</p>)
}
ReactDOM.render(<Testcomponent/>, document.getElementById("react-goes-here"))
ReactDOM.render(<div><Header /><Description /></div>, document.getElementById("root"))
export default App;
