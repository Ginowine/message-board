require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: 'shimmerevm',
  networks: {
    shimmerevm: {
      url: 'https://json-rpc.evm.shimmer.network',
      chainId: 148,
      timeout: 60000,
    },
  },
};
