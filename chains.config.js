// chain configs in ocean.js ConfigHelperConfig format
// see: https://github.com/oceanprotocol/ocean.js/blob/e07a7cb6ecea12b39ed96f994b4abe37806799a1/src/utils/ConfigHelper.ts#L8

const chains = [
  {
    chainId: 23294,
    isDefault: true,
    isCustom: true,
    network: 'Sapphire Mainnet',
    oceanTokenSymbol: 'PTX',
    oceanTokenAddress: '0x431aE822B6D59cc96dA181dB632396f58932dA9d',
    nftFactoryAddress: '0x80E63f73cAc60c1662f27D2DFd2EA834acddBaa8',
    fixedRateExchangeAddress: '0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10',
    dispenserAddress: '0x2112Eb973af1DBf83a4f11eda82f7a7527D7Fde5',
    opfCommunityFeeCollector: '0x06100AB868206861a4D7936166A91668c2Ce1312',
    startBlock: 905232,
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
