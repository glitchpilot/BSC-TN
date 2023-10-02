// NFT.sol - NFT contract

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract NFT is ERC721Enumerable {
    using SafeMath for uint256;

    address public owner;

    constructor() ERC721("Threed NFT", "TNFT") {
        owner = msg.sender;
    }

    // Function to mint an NFT
    function mintNFT(address _to, uint256 _tokenId) external onlyOwner {
        _mint(_to, _tokenId);
    }

    // Add other NFT functionality (buy, sell, rent) here.
}
