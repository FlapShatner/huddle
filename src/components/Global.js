import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: ${({ theme }) => theme.colors.darkCyan};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  p {
    opacity: 0.8;
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
  }
  
  img {
    max-width: 100%;
}
`

export default GlobalStyles
