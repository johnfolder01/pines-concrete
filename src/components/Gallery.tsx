import styled from 'styled-components';
import { Section, Container, SectionTitle, SectionSubtitle } from './common';

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GalleryItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(30, 84, 72, 0.7) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const projects = [
  { id: 1, src: '/project-01.jpeg', alt: 'Light grey exposed aggregate patio with drainage behind weatherboard home' },
  { id: 2, src: '/project-02.jpeg', alt: 'Dark charcoal exposed aggregate curved driveway at modern brick home with mountain views' },
  { id: 3, src: '/project-03.jpeg', alt: 'Dark exposed aggregate concrete pathway with colorful pebble texture alongside lawn' },
  { id: 4, src: '/project-04.jpeg', alt: 'Light grey exposed aggregate pathway and driveway with landscaped garden bed' },
  { id: 5, src: '/project-05.jpeg', alt: 'Warm-toned exposed aggregate concrete with natural pebble finish in grid pattern' },
  { id: 6, src: '/project-06.jpeg', alt: 'Dark exposed aggregate concrete area with curved edges and drainage channel' },
  { id: 7, src: '/project-07.jpeg', alt: 'Light exposed aggregate driveway leading to double garage at suburban home' },
  { id: 8, src: '/project-08.jpeg', alt: 'Grey exposed aggregate concrete pathway along fence line beside two-story home' },
  { id: 9, src: '/project-09.jpeg', alt: 'Light grey honed concrete surface close-up showing smooth aggregate finish' },
  { id: 10, src: '/project-10.jpeg', alt: 'Dark charcoal exposed aggregate courtyard in front of white coastal home with timber deck' },
  { id: 11, src: '/project-11.jpeg', alt: 'Warm-toned exposed aggregate driveway with landscaping and native bush backdrop' },
  { id: 12, src: '/project-12.jpeg', alt: 'Modern charcoal exposed aggregate driveway with integrated center drainage channel at luxury home' },
];

export function Gallery() {
  return (
    <Section id="gallery" $background="light">
      <Container>
        <SectionTitle>Our Work</SectionTitle>
        <SectionSubtitle>
          Browse our portfolio of completed projects across the South Coast.
        </SectionSubtitle>

        <GalleryGrid>
          {projects.map((project) => (
            <GalleryItem key={project.id}>
              <img src={project.src} alt={project.alt} loading="lazy" />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </Section>
  );
}
