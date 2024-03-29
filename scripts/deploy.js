const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const messageBoard = await ethers.deployContract("MessageBoard");
    console.log("Message Board contract deployed to:", await messageBoard.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
    });
