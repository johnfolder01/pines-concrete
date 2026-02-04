import styled from 'styled-components';
import { Section, Container, SectionTitle } from './common';

const AboutGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing['2xl']};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const AboutContent = styled.div``;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.dark};
`;

const FeatureList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.base};

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const AboutImage = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  aspect-ratio: 4/3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ExperienceBadge = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  span {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: 700;
  }
`;

export function About() {
  return (
    <Section id="about" $background="light">
      <Container>
        <AboutGrid>
          <AboutContent>
            <SectionTitle style={{ textAlign: 'left' }}>
              About PinesConcrete
            </SectionTitle>
            <AboutText>
              Based in Werri Beach, NSW, PinesConcrete is owned and operated by Ben McCarthy.
              We specialize in delivering high-quality concrete solutions for residential and
              commercial projects throughout the South Coast.
            </AboutText>
            <AboutText>
              With a commitment to craftsmanship and attention to detail, we take pride in
              every project—from decorative driveways to structural foundations.
            </AboutText>
            <FeatureList>
              <FeatureItem>
                <CheckIcon />
                <span>Fully Licensed (255088C)</span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon />
                <span>Local South Coast Business</span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon />
                <span>Quality Workmanship Guaranteed</span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon />
                <span>Free Quotes & Consultations</span>
              </FeatureItem>
            </FeatureList>
          </AboutContent>
          <AboutImage>
            <img src="/project-01.jpeg" alt="PinesConcrete project" />
            <ExperienceBadge>
              <span>20+</span>
              Years Experience
            </ExperienceBadge>
          </AboutImage>
        </AboutGrid>
      </Container>
    </Section>
  );
}
