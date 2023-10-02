# Threed Socialfi dApp 🟥

Threed is a socialfi dApp built on the Binance Smart Chain (BNB Chain) that allows users to create and join communities using token-gated NFTs. Users can also create, buy, sell, and rent NFTs within these communities.

## Table of Contents

- [Getting Started](#getting-started)
- [Smart Contracts](#smart-contracts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with Threed on your local development environment, follow these steps:    

1. Clone this repository:  
git clone <https://github.com/glitchpilot/Threed-BNBC->  
cd Threed    

2. Install project dependencies:
npm install


3. Configure your `.env` file with the required environment variables. You should set `MNEMONIC`, `BSC_TESTNET_RPC`, and `BSC_MAINNET_RPC` to your own values.  

4. Deploy the smart contracts to the Binance Smart Chain Testnet or Mainnet (see [Deployment](#deployment)).  

5. Run the dApp locally:


npm start  


## Smart Contracts

- `Community.sol`: Manages the creation and access control of communities.
- `Token.sol`: Implements the BEP-20 token used for gating access to communities.
- `NFT.sol`: Handles the creation, buying, selling, and renting of NFTs.

## Testing

You can run tests for the smart contracts using Truffle. Make sure to configure your Truffle environment in `truffle-config.js` before running tests.

To run tests, use the following command:  
truffle test


## Deployment

To deploy the smart contracts to the Binance Smart Chain (Testnet or Mainnet), use Truffle migrations. Ensure that you have configured your `truffle-config.js` file with the correct network settings.

Use the following commands to deploy to a specific network:

For Binance Smart Chain Testnet:

truffle migrate --network bscTestnet


For Binance Smart Chain Mainnet:  

truffle migrate --network bscMainnet  


## Contributing

Contributions to Threed are welcome! Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.





