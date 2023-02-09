import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { motion } from 'framer-motion'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/egg/2a.png');
  background-repeat: no-repeat;
  background-position: top right;
  height: 25.5rem;
  border-radius: 8px;
`

const Block = styled.div`
  //margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  min-width: 18rem;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 1rem;
  font-weight: 700;
`

const Actions = styled.div`
  margin-top: 24px;
  // background: grey;
`
// const Whole = styled(Card)`
//   // height: 270px;
//   // background: #FFFFFF`;

const Img = styled(motion.div)`
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
  display: none;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-evenly' }}>
        <Heading size="lg" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.1 }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          >
            <CardImage src="/images/GETh.png" alt="iBG logo" width={104} height={64} />{' '}
          </Img>
          <div style={{ height: '7rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Block>
              <div>
                <Text>{TranslateString(544, 'GETh to Harvest')}</Text>
                <Label>${(eggPrice * earningsSum).toFixed(2)}</Label>
              </div>
              <CakeHarvestBalance earningsSum={earningsSum} />
            </Block>
            <Block>
              <div>
                <Text>{TranslateString(546, 'GETh in Wallet')}</Text>
                <Label>${(eggPrice * cakeBalance).toFixed(2)}</Label>
              </div>
              <CakeWalletBalance cakeBalance={cakeBalance} />
            </Block>
          </div>
        </div>
        <Actions>
          {' '}
          {/* style={{ background: "linear-gradient(180deg, #00ECEC 0%, #6E318E 77.6%, #6E318E 100%)" }}   */}
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting EGG')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
