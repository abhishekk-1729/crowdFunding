require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = "https://eth-sepolia.g.alchemy.com/v2/QUwl_97dRUTdrveCPJd0w-g9pvlP7aoB"
const PRIVATE_KEY = "e27504d06da1b0159da7fc3c8ea2190d14d6dd545decee0a649394f865c7adac"
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};