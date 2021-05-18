import React from 'react';
import './App.scss';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar/> 
      </div>
      <div className="main-content">       
        <div className="content">
          <Homepage />
        </div>
      </div>
    </div>
  );
}

export default App;
