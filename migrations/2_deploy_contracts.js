const Community = artifacts.require("Community");
const Token = artifacts.require("Token");
const NFT = artifacts.require("NFT");

module.exports = function (deployer) {
  deployer.deploy(Token, "Threed Token", "TTOKEN").then(function () {
    return deployer.deploy(Community, Token.address);
  }).then(function () {
    return deployer.deploy(NFT);
  });
};
