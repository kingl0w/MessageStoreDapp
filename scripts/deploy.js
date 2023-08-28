const hre = require('hardhat');

async function main() {
  const store = await hre.ethers.deployContract('store'); //fetching bytecode and ABI

  await store.waitForDeployment(); //deploying the smart contract

  console.log('Deployed contract address:', `${store.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
