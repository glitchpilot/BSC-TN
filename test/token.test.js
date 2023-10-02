const Token = artifacts.require("Token");

contract("Token", (accounts) => {
  let token;

  before(async () => {
    token = await Token.deployed();
  });

  it("should have correct name and symbol", async () => {
    const name = await token.name();
    const symbol = await token.symbol();
    assert.equal(name, "Threed Token");
    assert.equal(symbol, "TTOKEN");
  });

  it("should mint tokens to the deployer", async () => {
    const balance = await token.balanceOf(accounts[0]);
    assert.equal(balance.toString(), "1000000000000000000000000");
  });
});
