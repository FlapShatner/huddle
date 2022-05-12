import styled from 'styled-components'
import heroBg from '../../images/bg-hero-desktop.svg'
import mobileBg from '../../images/bg-hero-mobile.svg'
import { Flex } from '../Flex.styled'

export const Main = styled.header`
  background-color: ${({ theme }) => theme.colors.paleCyan};
  background-image: url(${mobileBg});
  padding: 40px 0px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    background-image: url(${heroBg});
  }
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`

export const Logo = styled.img`
  width: 200px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 125px;
  }
`
export const Image = styled.img`
  max-width: 680px;
  margin-left: 60px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 0;
    width: 680px;
  }
  @media (max-width: ${({ theme }) => theme.med}) {
    max-width: 380px;
  }

  @media (max-width: ${({ theme }) => theme.sm}) {
    max-width: 320px;
  }
`
export const Header = styled.h1`
  font-size: 250%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkCyan};
  padding-right: 20px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    text-align: center;
    font-size: 175%;
    padding-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.sm}) {
    font-size: 150%;
  }
`
export const Copy = styled.p`
  font-size: 18px;
  font-family: 'Open-Sans', sans-serif;
  color: ${({ theme }) => theme.colors.darkCyan};
  opacity: 1;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    text-align: center;
    margin: 40px;
  }

  @media (max-width: ${({ theme }) => theme.sm}) {
    font-size: 16px;
  }
`
export const HeroFlex = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`
export const TextBlock = styled.div`
  @media (max-width: ${({ theme }) => theme.tablet}) {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
  }
`
