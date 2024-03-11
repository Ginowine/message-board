# Decentralized Message Board Smart Contract

This project deploys a straightforward smart contract for a message board on the Ethereum blockchain. Users can post messages on the board, and view all the posted messages.

# Contract Functionality

- Users can post messages to the board.
- Messages are stored on-chain and accessible to anyone.
- The contract enforces basic security measures:
  - Messages cannot be empty.
  - Messages cannot exceed a maximum length.
  - Messages cannot contain certain invalid characters.
  - The postMessage function is protected against reentrancy attacks.

# Requirements

- Node.js and npm installed
- Basic understanding of blockchain and smart contracts

# Setup

1. Clone this repository. [Message Board](https://github.com/Ginowine/message-board.git)
2. Install dependencies:

Bash

`npm install`

# Deployment

Run the deployment script:

Bash

`npx hardhat run scripts/deploy.js`

This will deploy the contract to the local Hardhat network and print the deployed contract address.

# Testing

Run the tests:

Bash

`npx hardhat test`

# Interaction

I've developed a React-based user interface specifically designed for effortless interaction with this smart contract. Feel free to clone this React UI project and start engaging with the smart contract seamlessly.

[Smart Contract UI](https://github.com/Ginowine/message-board-app)

# Additional Notes

This is a basic example and should not be used in production without further security audits and testing.

# Contributing

This project is open source and I welcome contributions. Feel free to submit pull requests with improvements or additional features.
