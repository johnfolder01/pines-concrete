import styled from 'styled-components';

interface SectionProps {
  $background?: 'white' | 'light' | 'dark' | 'forest';
}

export const Section = styled.section<SectionProps>`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme, $background = 'white' }) => {
    switch ($background) {
      case 'light':
        return theme.colors.light;
      case 'dark':
        return theme.colors.dark;
      case 'forest':
        return theme.colors.forest;
      default:
        return theme.colors.white;
    }
  }};
  color: ${({ theme, $background }) =>
    $background === 'dark' || $background === 'forest'
      ? theme.colors.white
      : theme.colors.dark};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.forest};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  opacity: 0.8;
`;
