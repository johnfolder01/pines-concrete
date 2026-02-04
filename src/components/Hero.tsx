import styled from 'styled-components';
import { ButtonLink } from './common';

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(30, 84, 72, 0.85), rgba(30, 84, 72, 0.85)),
    url('/hero.jpg') center/cover no-repeat;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
  padding-top: 100px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }
`;

const HeroHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const LicenseBadge = styled.div`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.8;
`;

export function Hero() {
  return (
    <HeroWrapper id="home">
      <HeroContent>
        <HeroTitle>
          Quality <HeroHighlight>Concrete</HeroHighlight> Services<br />
          on the South Coast
        </HeroTitle>
        <HeroSubtitle>
          From decorative finishes to structural foundations, we deliver exceptional
          concrete work throughout Werri Beach and surrounding areas.
        </HeroSubtitle>
        <HeroButtons>
          <ButtonLink href="#contact" $variant="primary" $size="lg">
            Get a Free Quote
          </ButtonLink>
          <ButtonLink href="#services" $variant="outline" $size="lg">
            Our Services
          </ButtonLink>
        </HeroButtons>
        <LicenseBadge>
          Licensed Contractor: 255088C
        </LicenseBadge>
      </HeroContent>
    </HeroWrapper>
  );
}
