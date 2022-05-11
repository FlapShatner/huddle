import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.darkCyan};
  width: max-content;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.paleCyan};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`
