// Community.sol - Contract to manage communities

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Community is Ownable {
    struct CommunityInfo {
        string name;
        address[] members;
    }

    mapping(uint256 => CommunityInfo) public communities;
    uint256 public totalCommunities;

    IERC20 public token; // Reference to your token contract

    event CommunityCreated(uint256 indexed communityId, string name);
    event MemberJoined(uint256 indexed communityId, address member);

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    // Function to create a new community
    function createCommunity(string memory _name) external onlyOwner {
        totalCommunities++;
        communities[totalCommunities] = CommunityInfo(_name, new address[](0));
        emit CommunityCreated(totalCommunities, _name);
    }

    // Function to join a community
    function joinCommunity(uint256 _communityId) external {
        require(_communityId <= totalCommunities, "Invalid community ID");
        require(token.balanceOf(msg.sender) >= 1, "Insufficient tokens");
        
        communities[_communityId].members.push(msg.sender);
        emit MemberJoined(_communityId, msg.sender);
    }
}
