require('@nomicfoundation/hardhat-toolbox');

require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: '0.8.19',
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: 'WVWE4NZHQ13HJNM6NKHGTPVFZDYEPJBT2Y',
  },
};

//0xEe1579B23FfD3da9B03eD260f8adbbf2FC56A4Dc
