const Buy = ({ state }) => {
  const buyStore = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    const amount = { value: ethers.utils.parseEther(0.01) };
    const transaction = await contract.buyStore(name, message, amount);
    console.log(name, message);
  };

  return (
    <>
      <div>
        <form onSubmit={buyStore}>
          <input
            id='name'
            // placeholder='Name'
          ></input>
          <input
            id='message'
            // placeholder='message'
          ></input>

          <button>Pay</button>
        </form>
      </div>
    </>
  );
};

export default Buy;
