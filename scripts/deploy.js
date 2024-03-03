// scripts/deploy.js

const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const MessageBoard = await ethers.getContractFactory("MessageBoard");

  // Deploy the contract
  const deployedContract = await MessageBoard.deploy();
  await deployedContract.deployed();

  // Print the contract address
  console.log("Contract deployed to:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
