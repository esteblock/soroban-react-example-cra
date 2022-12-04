import React from 'react';
import './App.css';
import Address from './components/Address';
import Network from './components/Network';
import MyWalletData from './components/MyWalletData';
import MyConnectButton from './components/MyConnectButton';

function App() {
 
  return (
    
    <div className="App">
      <header className="App-header">
        <MyConnectButton/>
        <MyWalletData/>
        <Address/>
        <Network/>
      </header>
    </div>
  );
}

export default App;
