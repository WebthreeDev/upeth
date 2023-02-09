import React from 'react'
import { Button, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import CardValue from './CardValue'

const CakeHarvestBalance = ({ earningsSum }) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Button size="sm" style={{ height: '2rem' }}>
        {TranslateString(298, 'Locked')}
      </Button>
    )
  }

  return <CardValue value={earningsSum} />
}

export default CakeHarvestBalance
