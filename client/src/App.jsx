import { useState, useEffect } from 'react';
import abi from './contractJson/store.json';
import { ethers } from 'ethers';
import Memos from './components/Memos';
import Buy from './components/Buy';
import Logo from './assets/logo.png';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState('Not Connected');

  useEffect(() => {
    const template = async () => {
      const contractAddress = '0xEe1579B23FfD3da9B03eD260f8adbbf2FC56A4Dc';
      const contractABI = abi.abi;
      //metamask logic

      const { ethereum } = window;

      const account = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      });

      setAccount(account);
      const provider = new ethers.providers.Web3Provider(ethereum); //read the blockchain
      const signer = provider.getSigner(); //write the blockchain

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      console.log(contract);

      setState({ provider, signer, contract });
    };
    template();
  }, []);

  return (
    <>
      <div className='App'>
        <h1>MessageStoreApp</h1>
        <img
          src={Logo}
          alt='logo'
          id='logo'
        />
        <p>Connected Account: {account[0]}</p>
        <Buy state={state}></Buy>
        {/* <Memos state={state}></Memos> */}
      </div>
    </>
  );
}

export default App;
