// const hre = require("hardhat");

// async function main() {
  
//     const simpleNFT = await hre.ethers.getContractFactory("simpleNFT");
//     const nft = await simpleNFT.deploy();
  
//     await nft.deployed();
  
//     console.log("Simple NFT deployed to:", nft.address);
//   }
  
//   // We recommend this pattern to be able to use async/await everywhere
//   // and properly handle errors.
//   main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//       console.error(error);
//       process.exit(1);
//   });