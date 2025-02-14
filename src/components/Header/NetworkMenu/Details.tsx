import AddNetwork from '@components/@shared/AddNetwork'
import { getSupportedChainIds } from 'chains.config'
import { ReactElement } from 'react'
import { useAccount, useNetwork } from 'wagmi'
import AddTokenList from './AddTokenList'
import styles from './Details.module.css'

export default function Details(): ReactElement {
  const { connector: activeConnector } = useAccount()

  const { chains, chain: activeChain } = useNetwork()

  const networksListToDisplay = chains.filter(
    (chain) => chain.id !== activeChain?.id
  )

  return (
    <div className={styles.details}>
      <ul>
        <li className={styles.networks}>
          <div title="Networks">Networks</div>
          {networksListToDisplay?.length > 0 &&
            networksListToDisplay.map((chain) => {
              if (!getSupportedChainIds().includes(chain.id)) return false
              return (
                <AddNetwork
                  key={`add-network-button-${chain.id}`}
                  chainId={chain.id}
                  networkName={chain.name}
                />
              )
            })}
        </li>
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
