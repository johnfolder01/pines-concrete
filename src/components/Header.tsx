import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonLink } from './common';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['2xl']};
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  z-index: 1001;

  img {
    height: 50px;
    width: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 60px;
    }
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const PhoneCTA = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

// Mobile Menu Components
const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }

  span {
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.forest};
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ $isOpen }) => $isOpen ? 'translateY(8px) rotate(45deg)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => $isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'};
    }
  }
`;

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileMenu = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding: 100px ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobilePhoneCTA = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo href="#home" onClick={closeMenu}>
            <img src="/logo.jpeg" alt="PinesConcrete" />
          </Logo>

          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>

          <PhoneCTA>
            <ButtonLink href="tel:0438703109" $variant="primary">
              <PhoneIcon />
              <span>0438 703 109</span>
            </ButtonLink>
          </PhoneCTA>

          <HamburgerButton
            $isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </HamburgerButton>
        </HeaderContainer>
      </HeaderWrapper>

      <MobileMenuOverlay $isOpen={isMenuOpen} onClick={closeMenu} />

      <MobileMenu $isOpen={isMenuOpen}>
        <MobileNavLink href="#about" onClick={closeMenu}>About</MobileNavLink>
        <MobileNavLink href="#services" onClick={closeMenu}>Services</MobileNavLink>
        <MobileNavLink href="#gallery" onClick={closeMenu}>Gallery</MobileNavLink>
        <MobileNavLink href="#contact" onClick={closeMenu}>Contact</MobileNavLink>

        <MobilePhoneCTA>
          <ButtonLink href="tel:0438703109" $variant="primary" style={{ width: '100%' }}>
            <PhoneIcon />
            <span>0438 703 109</span>
          </ButtonLink>
        </MobilePhoneCTA>
      </MobileMenu>
    </>
  );
}
