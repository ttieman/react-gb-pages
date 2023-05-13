import React from 'react';
import Nav from './components/Nav.jsx';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      
      </header>
    </div>
  );
}

export default App;
