const defaultChainId = 31337;

const supportedNetworks: any = {
  // npx hardhat node
  // npx hardhat run scripts/deployForHardhat.js --network localhost
  // Copy console address
  31337: {
    name: "Hardhat",
    tokenSymbol: "ETH",
    rpcURL: "http://localhost:8545",
    address: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
    decimal: 4,
  },
  // npx hardhat run scripts/deploy.js --network mumbai
  // Returned address is wrong. https://github.com/nomiclabs/hardhat/issues/2162.
  // Copy address from polygonscan
  80001: {
    name: "Polygon Mumbai Testnet",
    tokenSymbol: "MATIC",
    rpcURL: "https://rpc-mumbai.maticvigil.com",
    address: "0x694d53f603Ae497dE034dCc929B3830e801646Ce",
    decimal: 4,
  },

  1313161555: {
    name: "Aurora Testnet",
    tokenSymbol: "ETH",
    rpcURL: "https://testnet.aurora.dev",
    address: "0x511FD3ff870d824797377b7529A74CBA77562174",
    decimal: 4,
  },
};

export { defaultChainId, supportedNetworks };
