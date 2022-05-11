import styled from 'styled-components'
import heroBg from '../../images/bg-hero-desktop.svg'
import { Flex } from '../Flex.styled'

export const Main = styled.header`
  background-color: ${({ theme }) => theme.colors.paleCyan};
  background-image: url(${heroBg});
  padding: 40px 0px;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`

export const Logo = styled.img``
export const Image = styled.img`
  width: 680px;
  margin-left: 60px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`
export const Header = styled.h1`
  font-size: 250%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkCyan};
  padding-right: 20px;

  @media (max-width: ${({ theme }) => theme.med}) {
    text-align: center;
  }
`
export const Copy = styled.p`
  font-size: 18px;
  font-family: 'Open-Sans', sans-serif;
  color: ${({ theme }) => theme.colors.darkCyan};
  opacity: 1;

  @media (max-width: ${({ theme }) => theme.med}) {
    text-align: center;
    margin: 40px;
  }
`
export const HeroFlex = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.med}) {
    flex-direction: column;
  }
`
export const TextBlock = styled.div`
  @media (max-width: ${({ theme }) => theme.med}) {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
  }
`
