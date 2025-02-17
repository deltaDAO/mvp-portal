import AddNetwork from '@components/@shared/AddNetwork'
import { getSupportedChainIds } from 'chains.config'
import { ReactElement, useMemo } from 'react'
import { useAccount, useNetwork } from 'wagmi'
import { useMarketMetadata } from '../../../@context/MarketMetadata'
import {
  getNetworkDataById,
  getNetworkDisplayName
} from '../../../@hooks/useNetworkMetadata'
import AddTokenList from './AddTokenList'
import styles from './Details.module.css'
import networkdata from '../../../../content/networks-metadata.json'

export default function Details(): ReactElement {
  const { connector: activeConnector } = useAccount()

  const { chain: activeChain } = useNetwork()
  const { appConfig } = useMarketMetadata()

  const networksListToDisplay = useMemo(() => {
    return appConfig.chainIdsSupported.filter(
      (chainId) => chainId !== activeChain?.id
    )
  }, [activeChain])

  return (
    <div className={styles.details}>
      <ul>
        {networksListToDisplay?.length > 0 && (
          <li className={styles.networks}>
            <div title="Networks">Networks</div>
            {networksListToDisplay.map((chainId) => {
              return (
                <AddNetwork
                  key={`add-network-button-${chainId}`}
                  chainId={chainId}
                  networkName={getNetworkDisplayName(
                    getNetworkDataById(networkdata, chainId)
                  )}
                />
              )
            })}
          </li>
        )}
        {activeConnector?.name === 'MetaMask' && (
          <li className={styles.tokens}>
            <div title="Tokens">Tokens</div>
            <AddTokenList />
          </li>
        )}
      </ul>
    </div>
  )
}
