import GlobalStyles from './components/Global'
import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import CTA from './components/CTA/CTA'

const theme = {
  colors: {
    primary: 'hsl(322, 100%, 66%)',
    paleCyan: 'hsl(193, 100%, 96%)',
    darkCyan: 'hsl(192, 100%, 9%)',
    grayBlue: 'hsl(208, 11%, 55%)',
  },
  sm: '375px',
  mobile: '600px',
  tablet: '800px',
  med: '1100px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </ThemeProvider>
  )
}

export default App
