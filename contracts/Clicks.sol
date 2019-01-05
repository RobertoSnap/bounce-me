pragma solidity ^0.4.24;

import "./../node_modules/openzeppelin-solidity/contracts/drafts/SignatureBouncer.sol";
import "./../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Clicks is SignatureBouncer {

    using SafeMath for uint;

    uint public _clicks= 10;
    
    function increment(bytes signature) public onlyValidSignature(signature) {
        _clicks++;
    }
    
    function validSig(bytes signature) public view  returns (bool) {
        return _isValidSignature(msg.sender, signature);
    }

}