// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0

contract MessageBoard {
    // Array to store messages
    string[] public messages;

    // Function to post a message
    function postMessage (string memory message) public {
        // Add the message to the array
        messages.push(message);
    }

    // Function to retrieve all messages
    function getMessages() public view returns (string[] memory){
        return messages;
    }
}