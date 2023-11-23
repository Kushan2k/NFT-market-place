/* eslint-disable no-undef */

require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-deploy-ethers")

/** @type import('hardhat/config').HardhatUserConfig */
// eslint-disable-next-line no-undef
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.23",
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 1117,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  gasReporter: {
    enabled: true,
  },
}
