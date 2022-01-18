// require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
const { API_URL_MAINNET, API_URL_RINKEBY, API_URL_BSCTEST, PRIVATE_KEY, PUBLIC_KEY, MNEMONIC } = process.env; // alchemy api key for rinkeby


module.exports = {

  // defaultNetwork: "bsctestnet",

  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      // See its defaults
    },
    mainnet: {
      url: API_URL_MAINNET, // "https://mainnet.infura.io/v3/<your_infura_key"
      accounts: [PRIVATE_KEY,]
    },
    rinkeby: {
      url: API_URL_RINKEBY,
      accounts: [PRIVATE_KEY,],
    },
    bsctest: {
      url: API_URL_BSCTEST,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: MNEMONIC}
    },
    bscmain: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: MNEMONIC}
    }
  },

  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  mocha: {
    timeout: 20000
  }
  
};