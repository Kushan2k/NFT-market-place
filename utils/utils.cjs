const isDevChain = (name) => {
  const devchains = ["hardhat", "localhost"]

  if (devchains.includes(name)) {
    return true
  }
  return false
}

module.exports = { isDevChain }
