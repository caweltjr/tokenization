var MyToken = artifacts.require("./MyToken.sol");
var MyTokenSale = artifacts.require("./MyTokenSale.sol");
var MyKycContract = artifacts.require("KycContract");
require("dotenv").config({path:"../.env"});

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(MyToken,process.env.INITIAL_TOKENS);
    await deployer.deploy(MyTokenSale,process.env.INITIAL_TOKENS, addr[0], MyToken.address);
    await deployer.deploy(MyKycContract);
    let instance = await MyToken.deployed();
    await instance.transfer(MyToken.address, process.env.INITIAL_TOKENS);
};
