const hre = require("hardhat");

async function main() {
  const crowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const contract = await crowdFunding.deploy(); //instance of contract

  await contract.waitForDeployment()
  console.log("Address of contract:", await contract.getAddress());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});