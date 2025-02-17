// chain configs in ocean.js ConfigHelperConfig format
// see: https://github.com/oceanprotocol/ocean.js/blob/e07a7cb6ecea12b39ed96f994b4abe37806799a1/src/utils/ConfigHelper.ts#L8

const chains = [
  // {
  //   chainId: 23294,
  //   isDefault: true,
  //   isCustom: true,
  //   network: 'Sapphire Mainnet',
  //   oceanTokenSymbol: 'PTX',
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
  //   subgraphUri: 'https://subgraph.main.pontus-x.eu',
  //   explorerUri: 'https://explorer.pontus-x.eu/testnet/pontusx'
  // },
  // {
  //   chainId: 23294,
  //   isDefault: true,
  //   isCustom: true,
  //   network: 'Sapphire Mainnet (Self Deploy 1)',
  //   oceanTokenSymbol: 'PTX',
  //   oceanTokenAddress: '0x39d22B78A7651A76Ffbde2aaAB5FD92666Aca520',
  //   nftFactoryAddress: '0x9673154d6e2CBdDd611bF1a6ac700C5c3433605C',
  //   fixedRateExchangeAddress: '0x0843409b24CBFBa40B7E4a857D4Bca9adbD90176',
  //   dispenserAddress: '0xE0322FCF88f837A110dC297cc2F3EE31cf77231D',
  //   opfCommunityFeeCollector: '0x66bF12f444A63E4dA02904EA0A7f7344a3Ca2023',
  //   startBlock: 7639618,
  //   transactionBlockTimeout: 50,
  //   transactionConfirmationBlocks: 1,
  //   transactionPollingTimeout: 750,
  //   gasFeeMultiplier: 1.1,
  //   providerUri: 'https://provider.main.pontus-x.eu',
  //   providerAddress: '0x9546d39CE3E48BC942f0be4AA9652cBe0Aff3592',
  //   metadataCacheUri: 'https://aquarius.main.pontus-x.eu',
  //   nodeUri: 'https://rpc.main.pontus-x.eu/0953a56072a9a7ca46f57498453d2b3d',
  //   subgraphUri: 'https://subgraph.main.pontus-x.eu',
  //   explorerUri: 'https://explorer.pontus-x.eu/testnet/pontusx'
  // },
  {
    chainId: 23294,
    isDefault: true,
    isCustom: true,
    network: 'Sapphire Mainnet (Self Deploy 2)',
    oceanTokenSymbol: 'PTX',
    oceanTokenAddress: '0x39d22B78A7651A76Ffbde2aaAB5FD92666Aca520',
    nftFactoryAddress: '0xB6a10E4352a1Ba3E4Bf01238Ec03ecfcFfE229e1',
    fixedRateExchangeAddress: '0x45922EF317f9ac4F638FE00B02e728134381D0AE',
    dispenserAddress: '0x66F443A7Da1bBd1a551F5F3061d684C589D0Ca9F',
    opfCommunityFeeCollector: '0x3F90c741f1Fc24a972CA7d398208931d8F4Cf4d8',
    startBlock: 7640069,
    transactionBlockTimeout: 50,
    transactionConfirmationBlocks: 1,
    transactionPollingTimeout: 750,
    gasFeeMultiplier: 1.1,
    providerUri: 'https://provider.main.pontus-x.eu',
    providerAddress: '0x9546d39CE3E48BC942f0be4AA9652cBe0Aff3592',
    metadataCacheUri: 'https://aquarius.main.pontus-x.eu',
    nodeUri: 'https://rpc.main.pontus-x.eu/0953a56072a9a7ca46f57498453d2b3d',
    subgraphUri: 'https://subgraph.main.pontus-x.eu',
    explorerUri: 'https://explorer.pontus-x.eu/testnet/pontusx'
  },
  {
    chainId: 32457,
    isDefault: true,
    isCustom: true,
    network: 'pontusx-testnet',
    oceanTokenSymbol: 'OCEAN',
    oceanTokenAddress: '0x5B190F9E2E721f8c811E4d584383E3d57b865C69',
    nftFactoryAddress: '0x2C4d542ff791890D9290Eec89C9348A4891A6Fd2',
    fixedRateExchangeAddress: '0xcE0F39abB6DA2aE4d072DA78FA0A711cBB62764E',
    dispenserAddress: '0xaB5B68F88Bc881CAA427007559E9bbF8818026dE',
    opfCommunityFeeCollector: '0xACC8d1B2a0007951fb4ed622ACB1C4fcCAbe778D',
    startBlock: 82191,
    transactionBlockTimeout: 50,
    transactionConfirmationBlocks: 1,
    transactionPollingTimeout: 750,
    gasFeeMultiplier: 1.1,
    providerUri: 'https://provider.test.pontus-x.eu',
    providerAddress: '0x9546d39CE3E48BC942f0be4AA9652cBe0Aff3592',
    metadataCacheUri: 'https://aquarius.pontus-x.eu',
    nodeUri: 'https://rpc.test.pontus-x.eu',
    subgraphUri: 'https://subgraph.test.pontus-x.eu',
    explorerUri: 'https://explorer.pontus-x.eu/testnet/pontusx'
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
