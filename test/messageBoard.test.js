const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MessageBoard", function () {
    let messageBoard;

    beforeEach(async function () {
        // Deploy the contract before each test
        const MessageBoard = await ethers.getContractFactory("MessageBoard");
        messageBoard = await MessageBoard.deploy();
        await messageBoard.deployed();
    });

    it("Should post a message to the board", async function () {
        const message = "IOTA is a fantastic global blockchain organization";
        await messageBoard.postMessage(message);

        const storedMessages = await messageBoard.getMessages();
        expect(storedMessages.length).to.equal(1);
        expect(storedMessages[0]).to.equal(message);
    });

    // tests for edge cases:

    it("Should not allow posting an empty message", async function () {
        const emptyMessage = "";
        await expect(messageBoard.postMessage(emptyMessage)).to.be.revertedWith("Empty message is not allowed");
    });

    it("Should not allow posting a message exceeding the maximum length", async function () {
        // Define a string exceeding the maximum length
        const longMessage = "This message is too long to be posted.".repeat(10);
        await expect(messageBoard.postMessage(longMessage)).to.be.revertedWith("Message exceeds maximum length");
    });

    it("Should not allow posting a message with invalid characters", async function () {
        const invalidMessage = "This message contains invalid characters (¿)";
        await expect(messageBoard.postMessage(invalidMessage)).to.be.revertedWith("Message contains invalid characters");
    });
});
