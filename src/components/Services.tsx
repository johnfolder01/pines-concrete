import styled from 'styled-components';
import { Section, Container, SectionTitle, SectionSubtitle } from './common';

const ServicesGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};

  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.forest};
  }
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.forest};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.6;
  opacity: 0.8;
`;

const ServiceList = styled.ul`
  margin-top: ${({ theme }) => theme.spacing.lg};
  text-align: left;
`;

const ServiceListItem = styled.li`
  padding: ${({ theme }) => theme.spacing.xs} 0;
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const DecorativeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
  </svg>
);

const StructuralIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" />
  </svg>
);

const LandscapeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
  </svg>
);

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        <SectionSubtitle>
          We offer a comprehensive range of concrete services to meet your residential
          and commercial needs.
        </SectionSubtitle>

        <ServicesGrid>
          <ServiceCard>
            <IconWrapper>
              <DecorativeIcon />
            </IconWrapper>
            <ServiceTitle>Decorative Concrete</ServiceTitle>
            <ServiceDescription>
              Transform your outdoor spaces with stunning decorative concrete finishes
              that combine beauty with durability.
            </ServiceDescription>
            <ServiceList>
              <ServiceListItem>Exposed aggregate</ServiceListItem>
              <ServiceListItem>Stamped concrete</ServiceListItem>
              <ServiceListItem>Colored concrete</ServiceListItem>
              <ServiceListItem>Polished finishes</ServiceListItem>
            </ServiceList>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <StructuralIcon />
            </IconWrapper>
            <ServiceTitle>Structural Concrete</ServiceTitle>
            <ServiceDescription>
              Strong foundations and structural elements built to last, meeting all
              Australian building standards.
            </ServiceDescription>
            <ServiceList>
              <ServiceListItem>House slabs</ServiceListItem>
              <ServiceListItem>Footings & foundations</ServiceListItem>
              <ServiceListItem>Retaining walls</ServiceListItem>
              <ServiceListItem>Suspended slabs</ServiceListItem>
            </ServiceList>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <LandscapeIcon />
            </IconWrapper>
            <ServiceTitle>Hard Landscapes</ServiceTitle>
            <ServiceDescription>
              Complete your outdoor living areas with professionally installed
              concrete hardscaping solutions.
            </ServiceDescription>
            <ServiceList>
              <ServiceListItem>Driveways</ServiceListItem>
              <ServiceListItem>Pathways & patios</ServiceListItem>
              <ServiceListItem>Pool surrounds</ServiceListItem>
              <ServiceListItem>Outdoor entertaining</ServiceListItem>
            </ServiceList>
          </ServiceCard>
        </ServicesGrid>
      </Container>
    </Section>
  );
}
