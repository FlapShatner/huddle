import { Container } from '../Container.styled'
import { Flex } from '../Flex.styled'
import { Column, H2 } from './Features.styled'

export default function Features() {
  return (
    <Container>
      <Column>
        <Flex>
          <div>
            <H2>Grow Together</H2>
          </div>
        </Flex>
      </Column>
    </Container>
  )
}
