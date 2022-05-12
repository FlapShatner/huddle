import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 20px 100px;
  justify-content: space-between;
`

export const H2 = styled.h2`
  @media (max-width: ${({ theme }) => theme.med}) {
    text-align: center;
  }
`

export const Copy = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.grayBlue};

  @media (max-width: ${({ theme }) => theme.med}) {
    text-align: center;
  }
`

export const FeatureSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  border-style: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.med}) {
    flex-direction: ${(props) => (props.middle ? 'column' : 'column-reverse')};
  }
`
export const Image = styled.img`
  width: 406px;
  height: 332px;
  padding: 10px 5px;

  @media (max-width: ${({ theme }) => theme.med}) {
    width: 236px;
    height: 194px;
    padding: 0;
  }
`
export const Text = styled.div`
  margin: 120px 40px 120px 100px;
  max-width: 488px;

  @media (max-width: ${({ theme }) => theme.med}) {
    margin: 40px auto;
    padding: 0 40px;
  }
`

export const ImgContainer = styled.div`
  min-width: 440px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 80px;
  margin-right: 20px;

  @media (max-width: ${({ theme }) => theme.med}) {
    height: min-content;
    min-width: min-content;
    margin: 0;
    padding-top: 60px;
  }
`
