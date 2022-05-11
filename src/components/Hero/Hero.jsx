import { Main, Nav, Logo, Image, Header, Copy, HeroFlex, TextBlock } from './Hero.styled'
import { Flex } from '../Flex.styled'
import { Container } from '../Container.styled'
import { Button, PrimaryButton } from '../Button.styled'
import logoImg from '../../images/logo.svg'
import mockup from '../../images/illustration-mockups.svg'

export default function Hero() {
  return (
    <Main>
      <Container>
        <Nav>
          <Logo src={logoImg} alt='logo' />
          <Button>Try It Free</Button>
        </Nav>
        <HeroFlex>
          <TextBlock>
            <Header>Build The Community Your Fans Will Love</Header>
            <Copy>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
              connections with your users as you engage in genuine discussion.{' '}
            </Copy>
            <PrimaryButton>Get Started For Free</PrimaryButton>
          </TextBlock>
          <Image src={mockup} alt='illustration' />
        </HeroFlex>
      </Container>
    </Main>
  )
}
