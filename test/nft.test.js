const NFT = artifacts.require("NFT");

contract("NFT", (accounts) => {
  let nft;

  before(async () => {
    nft = await NFT.deployed();
  });

  it("should mint an NFT", async () => {
    const tokenId = 1;
    await nft.mintNFT(accounts[1], tokenId);
    const owner = await nft.ownerOf(tokenId);
    assert.equal(owner, accounts[1]);
  });

  // Add more NFT tests as needed.
});
