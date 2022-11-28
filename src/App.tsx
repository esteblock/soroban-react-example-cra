import React from 'react';
import './App.css';
import Address from './components/Address';
import Network from './components/Network';

function App() {
 
  return (
    
    <div className="App">
      <header className="App-header">
        <Address/>
        <Network/>
      </header>
    </div>
  );
}

export default App;
