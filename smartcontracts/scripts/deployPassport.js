const hre = require("hardhat");

async function main() {
  
    // Start deployment, returning a promise that resolves to a contract object
    const Passport = await hre.ethers.getContractFactory("MyPassport")
    const passport = await Passport.deploy()

    await passport.deployed()

    console.log("Contract deployed to address:", passport.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
});
  