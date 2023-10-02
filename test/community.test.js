const Community = artifacts.require("Community");
const Token = artifacts.require("Token");

contract("Community", (accounts) => {
  let community;
  let token;

  before(async () => {
    token = await Token.deployed();
    community = await Community.deployed();
  });

  it("should create a community", async () => {
    const tx = await community.createCommunity("Sample Community", { from: accounts[0] });
    assert.equal(tx.logs[0].event, "CommunityCreated");
  });

  it("should allow a user to join a community", async () => {
    const tx = await community.joinCommunity(1, { from: accounts[1] });
    assert.equal(tx.logs[0].event, "MemberJoined");
  });
});
