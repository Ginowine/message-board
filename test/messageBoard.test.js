const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MessageBoard", function () {
    let messageBoard;

    // Deploy the contract before each test
    beforeEach(async function () {
        const MessageBoard = await ethers.getContractFactory("MessageBoard");
        messageBoard = await MessageBoard.deploy();
    });

    // Test case for successful message posting
    it("Should post a message to the board", async function () {
        const message = "IOTA is a fantastic global blockchain organization";
        await messageBoard.postMessage(message);

        const storedMessages = await messageBoard.getMessages();

        // Assert message is stored correctly
        expect(storedMessages.length).to.equal(1);
        expect(storedMessages[0]).to.equal(message);
    });

    // Test case for empty message rejection
    it("Should not allow posting an empty message", async function () {
        const emptyMessage = "";
        // Assert the transaction reverts with the expected error message
        await expect(messageBoard.postMessage(emptyMessage)).to.be.revertedWith("Empty message is not allowed");
    });

    // Test case for message exceeding maximum length
    it("Should not allow posting a message exceeding the maximum length", async function () {
        // Define a string exceeding the maximum length
        const longMessage = "This message is too long to be posted.".repeat(10);
        // Assert the transaction reverts with the expected error message
        await expect(messageBoard.postMessage(longMessage)).to.be.revertedWith("Message exceeds maximum length");
    });

    // Test case for invalid character detection
    it("Should not allow posting a message with invalid characters", async function () {
        const invalidMessage = "This message contains invalid characters (>)";
        // Assert the transaction reverts with the expected error message
        await expect(messageBoard.postMessage(invalidMessage)).to.be.revertedWith("Message contains invalid characters");
    });

    it("Should store and retrieve multiple messages", async function () {
        const message1 = "Message 1";
        const message2 = "Message 2";
        const message3 = "Message 3";
    
        await messageBoard.postMessage(message1);
        await messageBoard.postMessage(message2);
        await messageBoard.postMessage(message3);
    
        const storedMessages = await messageBoard.getMessages();
    
        // Assert all three messages are stored and returned in order
        expect(storedMessages.length).to.equal(3);
        expect(storedMessages[0]).to.equal(message1);
        expect(storedMessages[1]).to.equal(message2);
        expect(storedMessages[2]).to.equal(message3);
    });
});
