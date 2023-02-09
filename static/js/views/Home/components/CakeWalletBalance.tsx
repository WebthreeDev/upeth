import React from 'react'
import { Text, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const CakeWalletBalance = ({ cakeBalance }) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Button size="sm" style={{ height: '2rem' }}>
        {TranslateString(298, 'Locked')}
      </Button>
    )
  }

  return <CardValue value={cakeBalance} fontSize="24px" />
}

export default CakeWalletBalance
