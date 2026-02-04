import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.forest};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.lg};
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const FooterBrand = styled.div`
  img {
    height: 50px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    opacity: 0.8;
    line-height: 1.6;
    max-width: 300px;
  }
`;

const FooterLinks = styled.div`
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  a {
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

const FooterContact = styled.div`
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactLine = styled.p`
  opacity: 0.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  a {
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

const FooterBottom = styled.div`
  padding-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  text-align: center;
  opacity: 0.6;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>
          <FooterBrand>
            <img src="/favicon.jpeg" alt="PinesConcrete" />
            <p>
              Quality concrete services for residential and commercial projects
              throughout Werri Beach and the South Coast.
            </p>
          </FooterBrand>

          <FooterLinks>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </FooterLinks>

          <FooterContact>
            <h4>Contact</h4>
            <ContactLine>
              <a href="tel:0438703109">0438 703 109</a>
            </ContactLine>
            <ContactLine>Werri Beach, NSW</ContactLine>
            <ContactLine>License: 255088C</ContactLine>
          </FooterContact>
        </FooterTop>

        <FooterBottom>
          <span>&copy; {currentYear} PinesConcrete. All rights reserved.</span>
          <span>Ben McCarthy | License: 255088C</span>
          <span>Crafted by <a href="https://cleanswelllines.com" target="_blank" rel="noopener noreferrer">Clean Swell Lines</a></span>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
}
