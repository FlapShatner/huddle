import styled from 'styled-components'
import heroBg from '../../images/bg-hero-desktop.svg'

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
`
export const Header = styled.h1`
  font-size: 250%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkCyan};
  padding-right: 20px;
`
export const Copy = styled.p`
  font-size: 18px;
  font-family: 'Open-Sans', sans-serif;
  color: ${({ theme }) => theme.colors.darkCyan};
  opacity: 1;
`
