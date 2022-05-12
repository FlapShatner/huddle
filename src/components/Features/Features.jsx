import { Container } from '../Container.styled'

import { Column, H2, FeatureSection, Copy, Image, Text, ImgContainer } from './Features.styled'
import together from '../../images/illustration-grow-together.svg'
import users from '../../images/illustration-your-users.svg'
import convo from '../../images/illustration-flowing-conversation.svg'

export default function Features() {
  return (
    <Container>
      <Column>
        <FeatureSection>
          <Text>
            <H2>Grow Together</H2>
            <Copy>
              Generate meaningful discussions with your audience and build a strong, loyal community. Think of the
              insightful conversations you miss out on with a feedback form.
            </Copy>
          </Text>
          <ImgContainer>
            <Image src={together} alt='illustration' />
          </ImgContainer>
        </FeatureSection>
        <FeatureSection middle>
          <ImgContainer>
            <Image src={convo} alt='illustration' />
          </ImgContainer>
          <Text>
            <H2>Flowing Conversations</H2>
            <Copy>
              You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time
              loading for a more natural flow.
            </Copy>
          </Text>
        </FeatureSection>
        <FeatureSection>
          <Text>
            <H2>Your Users</H2>
            <Copy>
              It takes no time at all to integrate Huddle with your app's authentication solution. This means, once
              signed in to your app, your users can start chatting immediately.
            </Copy>
          </Text>
          <ImgContainer>
            <Image src={users} alt='illustration' />
          </ImgContainer>
        </FeatureSection>
      </Column>
    </Container>
  )
}
