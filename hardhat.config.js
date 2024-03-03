require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337
    },
  },
};


// module.exports = {
//   solidity: '0.8.0',
//   defaultNetwork: 'shimmerevm',
//   networks: {
//     shimmerevm: {
//       url: 'https://json-rpc.evm.shimmer.network',
//       chainId: 148,
//       timeout: 60000,
//     },
//   },
// };
