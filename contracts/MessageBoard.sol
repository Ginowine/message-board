// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageBoard {
    // Maximum allowed message length
    uint constant MAX_MESSAGE_LENGTH = 100;

    // Array to store messages
    string[] public messages;

    // Function to post a message
    function postMessage(string memory message) public {
        // Check for empty message
        require(bytes(message).length > 0, "Empty message is not allowed");

        // Check for invalid characters
        require(!containsInvalidCharacters(message), "Message contains invalid characters");

        // Check for exceeding maximum length
        require(bytes(message).length <= MAX_MESSAGE_LENGTH, "Message exceeds maximum length");

        // Add the message to the array
        messages.push(message);
    }

    // Function to check for invalid characters
    function containsInvalidCharacters(string memory message) private pure returns (bool) {
        // This example only checks for specific symbols
        bytes memory messageBytes = bytes(message);
        for (uint i = 0; i < messageBytes.length; i++) {
            if (messageBytes[i] == '&' || messageBytes[i] == '<' || messageBytes[i] == '>') {
                return true;
            }
        }
        return false;
    }

    // Function to retrieve all messages
    function getMessages() public view returns (string[] memory) {
        return messages;
    }
}