import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';


import './App.css';



function App() {

  let [account,setAccount] = useState("");

  // Run when initalize
  useEffect(() => {
   loadWeb3();
   loadBlockchainData();
  }
  )

  const loadWeb3 = async()=> {

    if (window.ethereum)
    {
      window.web3js = new Web3(window.ethereum)
      await window.ethereum.enable()
    }

    else if (window.web3)
    {
      window.web3js = new Web3(window.web3.currentProvider)
    }

    else {
      window.alert("Connect Your Wallet")
    }

  }





  const loadBlockchainData = async()=> {

    const web3 = await window.web3js;

    // Wait for web3
    if (web3)
    {
      const accounts = await web3.eth.getAccounts()
      setAccount(accounts[0])
      console.log(account)
    }

  }








  return (
    <div className="App">

     First React App 

     {account}
 
    


    
    

    </div>
  );
}

export default App;
