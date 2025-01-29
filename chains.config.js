// chain configs in ocean.js ConfigHelperConfig format
// see: https://github.com/oceanprotocol/ocean.js/blob/e07a7cb6ecea12b39ed96f994b4abe37806799a1/src/utils/ConfigHelper.ts#L8

const chains = [
  {
    chainId: 23294,
    isDefault: true,
    isCustom: false,
    providerUri: 'https://provider.main.pontus-x.eu',
    providerAddress: '0xafcB6FA36869AFE260Ab5f6a687A756461452118',
    metadataCacheUri: 'https://aquarius.main.pontus-x.eu',
    nodeUri: 'https://1rpc.io/oasis/sapphire',
    subgraphUri: 'https://subgraph.main.pontus-x.eu',
    explorerUri: 'https://explorer.oasis.io/mainnet/sapphire'
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
