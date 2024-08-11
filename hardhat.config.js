require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan"); 
require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   
    base_Testnet: {
      url: process.env.BASE_RPC,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },

    'op-sepolia': {
      url: process.env.OP_RPC,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: {
      'op-sepolia': 'empty'
    },
    customChains: [
      {
        network: "op-sepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://optimism-sepolia.blockscout.com/api",
          browserURL: "https://optimism-sepolia.blockscout.com"
        }
      }
    ]
  },

  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

