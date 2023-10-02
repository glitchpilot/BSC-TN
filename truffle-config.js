const HDWalletProvider = require("@truffle/hdwallet-provider");
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

const mnemonic = process.env.MNEMONIC;
const bscTestnetRpc = process.env.BSC_TESTNET_RPC;
const bscMainnetRpc = process.env.BSC_MAINNET_RPC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    bscTestnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, bscTestnetRpc),
      network_id: "97", // Binance Smart Chain Testnet
      gas: 5500000,      // Gas limit
      confirmations: 10, // Number of confirmations to wait for
      timeoutBlocks: 200, // # of blocks before a deployment times out
    },
    bscMainnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, bscMainnetRpc),
      network_id: "56", // Binance Smart Chain Mainnet
      gas: 5500000,      // Gas limit
      confirmations: 10, // Number of confirmations to wait for
      timeoutBlocks: 200, // # of blocks before a deployment times out
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the Solidity version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
