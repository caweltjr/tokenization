pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Starducks Cappucino Token", "CAPPU") {
        _mint(msg.sender, initialSupply);
    }
}
