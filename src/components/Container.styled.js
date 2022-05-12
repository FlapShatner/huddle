import styled from 'styled-components'

export const Container = styled.section`
  width: 1440px;
  max-width: 100%;
  padding: 0 60px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 30px;
  }
`
