import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import './App.css';



function App() {

  let [account,setAccount] = useState("");

  // Run when initialize
  useEffect(() => {
   loadWeb3();
   loadBlockchainData();
  })

  const loadWeb3 = async()=> {
    if (window.ethereum)
    {
      window.web3js = await new Web3(window.ethereum)
      await window.ethereum.enable()
    }

    else if (window.web3)
    {
      window.web3 = await new Web3(window.web3.currentProvider)
    }

    else {
      window.alert("Connect your wallet")
    }
  }

  const loadBlockchainData = async()=> {
    const web3 = await window.web3js;
    
    // Wait for web3 
    if (web3)
    {
      const accounts = await web3.eth.getAccounts()
    setAccount(account = accounts[0])

    // For future use
    const networkID = await web3.eth.net.getId()
    }
    
  }



  return (
    <div className="App">

     First DeFi App
     <br></br>
    
     {account}

    </div>
  );
}

export default App;
