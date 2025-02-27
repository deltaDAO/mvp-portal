import { ReactElement, useCallback, useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import Tabs from '@shared/atoms/Tabs'
import { FormPublishData } from '../_types'
import Fixed from './Fixed'
import Free from './Free'
import content from '../../../../content/price.json'
import styles from './index.module.css'
import { useMarketMetadata } from '@context/MarketMetadata'
import { useNetwork } from 'wagmi'

export default function PricingFields(): ReactElement {
  const { appConfig } = useMarketMetadata()
  const { chain } = useNetwork()
  const { approvedBaseTokens } = useMarketMetadata()

  // Connect with main publish form
  const { values, setFieldValue } = useFormikContext<FormPublishData>()
  const { pricing } = values
  const { type } = pricing

  const defaultBaseToken =
    approvedBaseTokens?.find((token) =>
      token.name.toLowerCase().includes('euro')
    ) || approvedBaseTokens?.[0]

  const isBaseTokenSet = !!approvedBaseTokens?.find(
    (token) => token?.address === values?.pricing?.baseToken?.address
  )

  useEffect(() => {
    if (!approvedBaseTokens?.length) return
    if (isBaseTokenSet) return
    setFieldValue('pricing.baseToken', defaultBaseToken)
  }, [
    approvedBaseTokens,
    chain?.id,
    defaultBaseToken,
    isBaseTokenSet,
    setFieldValue,
    values.pricing.baseToken
  ])

  // Switch type value upon tab change
  function handleTabChange(tabName: string) {
    const type =
      tabName.toLowerCase() === 'priced' ? 'fixed' : tabName.toLowerCase()
    setFieldValue('pricing.type', type)
    setFieldValue('pricing.price', 0)
    setFieldValue('pricing.freeAgreement', false)
    setFieldValue('pricing.baseToken', defaultBaseToken)
    type !== 'free' && setFieldValue('pricing.amountDataToken', 1000)
  }

  const updateTabs = useCallback(() => {
    return [
      appConfig.allowFixedPricing === 'true'
        ? {
            title: content.create.fixed.title,
            content: (
              <Fixed
                approvedBaseTokens={approvedBaseTokens}
                content={content.create.fixed}
              />
            )
          }
        : undefined,

      appConfig.allowFreePricing === 'true'
        ? {
            title: content.create.free.title,
            content: <Free content={content.create.free} />
          }
        : undefined
    ].filter((tab) => tab !== undefined)
  }, [
    appConfig.allowFixedPricing,
    appConfig.allowFreePricing,
    approvedBaseTokens
  ])

  const [tabs, setTabs] = useState(updateTabs())
  const [tabIndex, setTabIndex] = useState(type === 'free' ? 1 : 0)

  useEffect(() => {
    setTabs(updateTabs())
  }, [updateTabs])

  return (
    <Tabs
      items={tabs}
      handleTabChange={handleTabChange}
      selectedIndex={tabIndex}
      onIndexSelected={setTabIndex}
      className={styles.pricing}
      showRadio
    />
  )
}
