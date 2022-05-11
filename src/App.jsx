import GlobalStyles from './components/Global'
import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import CTA from './components/CTA/CTA'

const theme = {
  colors: {
    primary: 'hsl(322, 100%, 66%)',
    paleCyan: 'hsl(193, 100%, 96%)',
    darkCyan: 'hsl(192, 100%, 9%)',
    grayBlue: 'hsl(208, 11%, 55%)',
  },
  mobile: '375px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <Features />
      <CTA />
    </ThemeProvider>
  )
}

export default App
