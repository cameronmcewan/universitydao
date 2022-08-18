// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// contract simpleNFT is ERC721 {
//     uint256 public tokenCounter;
//     constructor () public ERC721("Passport-test", "PPTEST"){
//         tokenCounter = 0;
//     }

//     function createNFT(string memory tokenURI) public return (uint256) {
//         uint256 newItemId = tokenCounter;
//         _safeMint(msg.sender, newItemId);
//         _setTokenURI(newItemId, tokenURI);
//         tokenCounter = tokenCounter + 1;
//         return newItemId;
//     }
// }