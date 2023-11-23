/* eslint-disable no-undef */

const { assert } = require("chai")
const { getNamedAccounts, network, deployments, ethers } = require("hardhat")
const { isDevChain } = require("../utils/utils.cjs")

!isDevChain(network.name)
  ? describe.skip
  : describe("Testing MyNFT Contract", () => {
      let deployer, MyNFT
      beforeEach(async () => {
        await deployments.fixture(["deploy"])
        deployer = (await getNamedAccounts()).deployer

        MyNFT = await ethers.getContract("MyNFT", deployer)
      })

      describe("successful deployment", () => {
        it("succesfully deployed!", async () => {
          const address = await MyNFT.getAddress()
          assert.notEqual(address, undefined)
        })

        it("check token name", async () => {
          const tokenName = await MyNFT.name()

          assert.equal(tokenName, "MyNFT")
        })
        it("check token symbol", async () => {
          const symbol = await MyNFT.symbol()

          assert.equal(symbol, "MFT")
        })
        it("check token count", async () => {
          const count = await MyNFT.tokenID()

          assert.equal(count, "0")
        })
        it("check owner", async () => {
          const owner = await MyNFT.owner()

          assert.equal(owner, deployer)
        })
      })
    })
