import { ethers } from 'ethers';

const Buy = ({ state }) => {
  const buyStore = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const etherValue = 0.001;
    const weiValue = etherValue * 1e18;
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    const amount = { value: weiValue };
    const transaction = await contract.buyStore(name, message, amount);
    await transaction.wait();
    console.log('Transaction is successful');
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={buyStore}>
        <input
          id='name'
          placeholder='Name'></input>
        <input
          id='message'
          placeholder='message'></input>

        <button>Pay</button>
      </form>
    </div>
  );
};

export default Buy;
