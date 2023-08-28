const hre = require('hardhat');

async function main() {
  const Store = await hre.ethers.deployContract('store');
  const store = await Store.deploy();

  await store.waitForDeployment();

  console.log('Deployed contract address:', `${store.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
