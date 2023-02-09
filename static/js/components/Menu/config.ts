import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '', // 'https://app.uniswap.org/#/swap?outputCurrency=0xf16cd087e1c2c747b2bdf6f9a5498aa400d99c24&use=V2', // 'https://exchange.goosedefi.com/',
      },
      {
        label: 'Liquidity',
        href: '', //  'https://app.uniswap.org/#/add/v2/0xf16cd087e1c2c747b2bdf6f9a5498aa400d99c24/ETH', // 'https://exchange.goosedefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farming',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'Price Charts',
    icon: 'InfoIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Dex Guru',
        href: '', //  'https://dex.guru/token/0xf16cd087e1c2c747b2bdf6f9a5498aa400d99c24-eth',
      },

      {
        label: 'Dex Tools',
        href: '', //  'https://www.dextools.io/app/uniswap/pair-explorer/0xfecc3b6fab9e07e1f2e6c712d17f86ff2b5ee5ac',
      },
    ],
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Swap',
  //       href: '/', //  'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: '/', // 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: '/', // 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: '/', // 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Github',
  //       href:'/', //  'https://github.com/goosedefi/',
  //     },
  //     {
  //       label: 'Docs',
  //       href: '/', // 'https://goosedefi.gitbook.io/goose-finance/',
  //     },
  //     {
  //       label: 'Blog',
  //       href: '/', // 'https://goosefinance.medium.com/',
  //     },
  //   ],
  // },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href:'/', //  'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: '/', // 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href:'/', //  'https://certik.org/projects/goose-finance',
  // },

  // {
  //   label: 'Audits',
  //   icon: 'AuditIcon',
  //   href:"https://github.com/GETh-Finance-Defi/GETh-Farms-build/blob/main/audits/eth.pdf"
  // }
]

export default config
