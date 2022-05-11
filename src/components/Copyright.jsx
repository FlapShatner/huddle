import styled from 'styled-components'

const CopyrightStyle = styled.p`
  color: #fff;
  font-size: 12px;
  opacity: 0.6;
`

export default function Copyright() {
  const thisYear = new Date().getFullYear()

  return <CopyrightStyle> &copy; Copyright {thisYear} Jordan Roberts All Rights Reserved</CopyrightStyle>
}
