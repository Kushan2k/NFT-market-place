/* eslint-disable no-undef */
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts()
  const { deploy } = deployments

  await deploy("MyNFT", {
    from: deployer,
    log: true,
  })
}

module.exports.tags = ["deploy"]
