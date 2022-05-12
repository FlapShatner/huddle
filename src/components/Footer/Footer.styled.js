import styled from 'styled-components'

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`
export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkCyan};
  padding: 90px 60px 40px;
  z-index: 1;
`
export const LogoWhite = styled.img`
  width: 100px;
  padding-left: 5px;
  padding-bottom: 10px;
`

export const Icon = styled.p`
  color: #fff;
  margin: 6px 0 0 0;
  padding-top: 6px;
`
export const Text = styled.p`
  color: #fff;
  font-size: 14px;
  opacity: 0.6;
`

export const ContactInfo = styled(Text)`
  max-width: 400px;
  padding-left: 15px;
  padding-top: 6px;
  font-weight: 400;
  margin: 6px 0 0 0;
  @media (max-width: ${({ theme }) => theme.sm}) {
    font-size: 12px;
  }
`
export const Link = styled(Text)`
  @media (max-width: ${({ theme }) => theme.sm}) {
    font-size: 12px;
  }
`

export const Links = styled(FlexCol)`
  padding: 20px 80px;

  @media (max-width: ${({ theme }) => theme.med}) {
    padding: 0;

    ${(props) => props.first && 'padding-top: 30px;'}
  }
`

export const Social = styled(Icon)`
  margin: 10px;
`
export const FooterContent = styled(FlexRow)`
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.med}) {
    flex-direction: column;
  }
`
export const End = styled(FlexCol)`
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.med}) {
    align-items: center;
    padding-top: 20px;
  }
`
