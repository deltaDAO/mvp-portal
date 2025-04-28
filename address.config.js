const PONTUSX_ADDRESSES = require('./pontusxAddresses.json')

module.exports = {
  whitelists: {
    'nft.owner': [
      '0xe065d46af7984e3350a54a4eb8c7b9fa6f23188a', // neusta aerospace GmbH
      '0x7c73f0c152a81e2f75d301e848e59ca5711e92a5', // Radiusmedia KG
      '0x20d5f579f9b4a070c14cc9aab4663500f3b94022', // Airbus Defense and Space GmbH
      '0x83253572e146ad1b66e631280bc573f5c39c0163', // neusta aerospace GmbH
      '0x55a569079e3ee9c1f13a7b29d77bd08025f884e6', // deltaDAO AG
      '0xfcd5e72c1aA8ac3872662f202480E65eafabF289' // ZARM Technik AG
    ],
    'datatokens.address': []
  },
  featured: [],
  verifiedAddresses: PONTUSX_ADDRESSES
}
