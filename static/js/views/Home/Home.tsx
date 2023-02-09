import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/man.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 116px;
  }
  padding-top: 30px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/man.png'), url('/images/egg/red.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`
const StyledHeading = styled(Heading)`
  background: -webkit-linear-gradient(#f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-weight: bolder;
  font-family: 'Bungee Inline', cursive;
`
const SmallHeading = styled.span`
  background: -webkit-linear-gradient(#8e9eab, #eef2f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-weight: bolder;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <StyledHeading as="h1" size="xl" mb="24px" color="primary1">
          GRAVITY<SmallHeading>ETH</SmallHeading>
        </StyledHeading>
        <Text color="primary1">{/* {TranslateString(578, 'Top 3 best DEFI app on Binance Smart Chain.')} */}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
