import External from '@images/external.svg'
import Copy from '@shared/atoms/Copy'
import explorerLinkStyles from '@shared/ExplorerLink/index.module.css'
import { NftMetadata } from '@utils/nft'
import { accountTruncate } from '@utils/wallet'
import { ReactElement } from 'react'
import ExplorerTokenLink from '../../../@shared/ExplorerLink/ExplorerTokenLink'
import styles from './NftTooltip.module.css'

// Supported OpenSea networks:
// https://support.opensea.io/hc/en-us/articles/4404027708051-Which-blockchains-does-OpenSea-support-
const openSeaNetworks = [1, 137]
const openSeaTestNetworks = [4]

export default function NftTooltip({
  nft,
  nftImage,
  address,
  chainId
}: {
  nft: NftMetadata
  nftImage: string
  address: string
  chainId: number
}): ReactElement {
  const openSeaSupported = openSeaNetworks
    .concat(openSeaTestNetworks)
    .includes(chainId)

  const openSeaBaseUri = openSeaSupported
    ? openSeaTestNetworks.includes(chainId)
      ? 'https://testnets.opensea.io'
      : 'https://opensea.io'
    : undefined

  const openSeaUrl = `${openSeaBaseUri}/assets/${
    chainId === 137 ? 'matic' : ''
  }/${address}/1`

  return (
    <div className={styles.wrapper}>
      {nftImage && <img src={nftImage} alt={nft?.name} />}
      <div className={styles.info}>
        {nft && <h5>{nft.name}</h5>}
        {address && (
          <span title={address} className={styles.address}>
            {accountTruncate(address)} <Copy text={address} />
          </span>
        )}
        <div className={styles.links}>
          {address && (
            <ExplorerTokenLink networkId={chainId} tokenAddress={address}>
              View on Explorer
            </ExplorerTokenLink>
          )}

          {openSeaSupported && address && (
            <a
              href={openSeaUrl}
              target="_blank"
              rel="noreferrer"
              className={explorerLinkStyles.link}
            >
              View on OpenSea <External />
            </a>
          )}
        </div>
        {!nft?.image_data && !nft?.image && (
          <p className={styles.fallback}>This Data NFT has no image set.</p>
        )}
      </div>
    </div>
  )
}
