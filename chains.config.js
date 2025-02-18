// chain configs in ocean.js ConfigHelperConfig format
// see: https://github.com/oceanprotocol/ocean.js/blob/e07a7cb6ecea12b39ed96f994b4abe37806799a1/src/utils/ConfigHelper.ts#L8

const chains = [
  // OPF Contracts
  // {
  //   chainId: 23294,
  //   isDefault: true,
  //   isCustom: true,
  //   network: 'Sapphire Mainnet',
  //   oceanTokenSymbol: 'OCEAN',
  //   oceanTokenAddress: '0x39d22b78a7651a76ffbde2aaab5fd92666aca520',
  //   nftFactoryAddress: '0x80E63f73cAc60c1662f27D2DFd2EA834acddBaa8',
  //   fixedRateExchangeAddress: '0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10',
  //   dispenserAddress: '0x2112Eb973af1DBf83a4f11eda82f7a7527D7Fde5',
  //   opfCommunityFeeCollector: '0x06100AB868206861a4D7936166A91668c2Ce1312',
  //   startBlock: 905232,
  //   transactionBlockTimeout: 50,
  //   transactionConfirmationBlocks: 1,
  //   transactionPollingTimeout: 750,
  //   gasFeeMultiplier: 1.1,
  //   providerUri: 'https://provider.main.pontus-x.eu',
  //   providerAddress: '0x9546d39CE3E48BC942f0be4AA9652cBe0Aff3592',
  //   metadataCacheUri: 'https://aquarius.main.pontus-x.eu',
  //   nodeUri: 'https://rpc.main.pontus-x.eu/0953a56072a9a7ca46f57498453d2b3d',
  //   subgraphUri: 'https://v4.subgraph.sapphire-mainnet.oceanprotocol.com',
  //   explorerUri: 'https://explorer.pontus-x.eu/testnet/pontusx'
  // }
  {
    chainId: 23294,
    isDefault: true,
    isCustom: true,
    network: 'Sapphire Mainnet',
    oceanTokenSymbol: 'OCEAN',
    oceanTokenAddress: '0x39d22B78A7651A76Ffbde2aaAB5FD92666Aca520',
    nftFactoryAddress: '0x2b4E0fA953Ac6f762cb0cC6736d257a0509C9f9B',
    fixedRateExchangeAddress: '0xE0a3fd09646dDA15f119b6Ad9Fcd1A110c432e1E',
    dispenserAddress: '0x9B7d696023Cf6f7Fbc8B7F4a9cEaACC46d7E9A24',
    opfCommunityFeeCollector: '0xb7731D56Ccd695c65537bF4eFAb642724e945E41',
    startBlock: 7654843,
    transactionBlockTimeout: 50,
    transactionConfirmationBlocks: 1,
    transactionPollingTimeout: 750,
    gasFeeMultiplier: 1.1,
    providerUri: 'https://provider.main.pontus-x.eu',
    providerAddress: '0x9546d39CE3E48BC942f0be4AA9652cBe0Aff3592',
    metadataCacheUri: 'https://aquarius.main.pontus-x.eu',
    nodeUri: 'https://rpc.main.pontus-x.eu/0953a56072a9a7ca46f57498453d2b3d',
    subgraphUri: 'https://subgraph.main.pontus-x.eu',
    explorerUri: 'https://explorer.pontus-x.eu/mainnet/sapphire'
  }
]

const getDefaultChainIds = () => {
  return chains.filter((chain) => chain.isDefault).map((c) => c.chainId)
}

const getSupportedChainIds = () => {
  return chains.map((c) => c.chainId)
}

const getCustomChainIds = () => {
  return chains.filter((c) => c.isCustom).map((c) => c.chainId)
}

module.exports = {
  chains,
  getDefaultChainIds,
  getSupportedChainIds,
  getCustomChainIds
}
