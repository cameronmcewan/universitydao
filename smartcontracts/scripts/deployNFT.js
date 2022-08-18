const hre = require("hardhat");

async function main() {
  
    // Start deployment, returning a promise that resolves to a contract object
    const MyNFT = await hre.ethers.getContractFactory("MyNFT")
    const myNFT = await MyNFT.deploy()

    await myNFT.deployed()

    console.log("Contract deployed to address:", myNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
});
  