import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
   // font-family: 'Kanit', sans-serif;
    font-family: 'Lato', sans-serif;
  }
  body {
    /* eslint-disable @typescript-eslint/no-empty-interface */
    background-image: url('${({ theme }) => theme.colors.background}') ;
    background-size: auto 100%;
    background-repeat : no-repeat;
    background-position: center center;

    ${({ theme }) => theme.mediaQueries.nav}{
      background-size: 100% 100%;
    }

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
