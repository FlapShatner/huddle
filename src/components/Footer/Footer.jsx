import { Container } from '../Container.styled'
import Copyright from '../Copyright'
import {
  FooterContainer,
  FlexCol,
  FlexRow,
  LogoWhite,
  Icon,
  ContactInfo,
  Link,
  Links,
  Social,
  FooterContent,
  End,
} from './Footer.styled'
import { IoLocationSharp, IoCall } from 'react-icons/io5'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import logoWhite from '../../images/logo-white.svg'

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FlexCol>
            <LogoWhite src={logoWhite} alt='logo' />
            <FlexRow>
              <Icon>
                <IoLocationSharp />
              </Icon>
              <ContactInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua
              </ContactInfo>
            </FlexRow>
            <FlexRow>
              <Icon>
                <IoCall />
              </Icon>
              <ContactInfo>+1-543-123-4567</ContactInfo>
            </FlexRow>
            <FlexRow>
              <Icon>
                <MdOutlineAlternateEmail />
              </Icon>
              <ContactInfo>contact@huddle.com</ContactInfo>
            </FlexRow>
          </FlexCol>
          <Links first>
            <Link>About Us</Link>
            <Link>What We Do</Link>
            <Link>FAQ</Link>
          </Links>
          <Links>
            <Link>Career</Link>
            <Link>Blog</Link>
            <Link>Contact Us</Link>
          </Links>
          <End>
            <FlexRow>
              <Social>
                <FaTwitter />
              </Social>
              <Social>
                <FaFacebook />
              </Social>
              <Social>
                <FaInstagram />
              </Social>
            </FlexRow>
            <Copyright />
          </End>
        </FooterContent>
      </Container>
    </FooterContainer>
  )
}
