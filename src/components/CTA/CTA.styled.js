import styled from 'styled-components'

export const Box = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 100px;
  position: absolute;
  z-index: 5;
  background-color: #fff;

  @media (max-width: ${({ theme }) => theme.med}) {
    padding: 20px 30px;
  }
`

export const CtaContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 80px;
`
export const Heading = styled.h2`
  padding-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.med}) {
    font-size: 125%;
  }

  @media (max-width: ${({ theme }) => theme.sm}) {
    font-size: 90%;
  }
`
