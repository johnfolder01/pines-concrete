export const theme = {
  colors: {
    primary: '#40E0D0',      // CTAs, headings, accents (turquoise from logo)
    primaryDark: '#2BA8A0',  // Hover states
    forest: '#1E5448',       // Pine tree green, secondary accents
    sky: '#5BC0DE',          // Wave motifs, backgrounds
    dark: '#1A1A1A',         // Body text
    light: '#F8F9FA',        // Backgrounds
    white: '#FFFFFF',        // Cards, contrast
  },
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
} as const;

export type Theme = typeof theme;
