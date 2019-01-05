const Clicks = artifacts.require("Clicks")

contract("Clicks", accounts => {
  it("should deploy with 10 clicks", async () => {
    let instance = await Clicks.deployed()
    let clicks = await instance._clicks.call()
    assert.equal(clicks.toString(), "10", "Value of clicks should start at 10")
  })

  it("I can increase click when i send correct signature", async () => {
    let instance = await Clicks.deployed()
    let contractAddress = instance.address
    let accountAddress = accounts[0]
    console.log("contractAddress", contractAddress)
    console.log("accountAddress", accountAddress.substring(2))
    let signature = web3.eth.accounts.sign(
      web3.utils.sha3(contractAddress, accountAddress),
      "0xd048f9e84561792dc4f9a13b084562abd1e3a2b65cc4eaadcf602d8ee3c9306e"
    ).signature
    console.log("signatur", signature)
    console.log("####TEST Valid sig####", await instance.validSig(signature))
  })
})
