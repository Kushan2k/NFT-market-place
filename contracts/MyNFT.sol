// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import {ERC721URIStorage,ERC721} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract MyNFT is ERC721URIStorage{

  uint public tokenID=0;
  address public owner;

  constructor() ERC721("MyNFT","MFT"){
    owner=msg.sender;
  }

  modifier onlyOwner(){

    require(msg.sender==owner,"You can not mint a NFT since you are not the owner");
    _;
  }


  function mint(string memory uri) external onlyOwner returns(uint){

    tokenID++;
    _safeMint(msg.sender,tokenID);
    _setTokenURI(tokenID,uri);
    return(tokenID);
    

  }

    
}
