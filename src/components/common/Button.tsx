import styled, { css } from 'styled-components';

interface ButtonProps {
  $variant?: 'primary' | 'outline';
  $size?: 'sm' | 'md' | 'lg';
}

const buttonStyles = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease;
  text-decoration: none;
  border: 2px solid transparent;

  ${({ $size = 'md', theme }) => {
    switch ($size) {
      case 'sm':
        return css`
          padding: ${theme.spacing.xs} ${theme.spacing.md};
          font-size: ${theme.fontSizes.sm};
        `;
      case 'lg':
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.fontSizes.lg};
        `;
      default:
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.lg};
          font-size: ${theme.fontSizes.base};
        `;
    }
  }}

  ${({ $variant = 'primary', theme }) => {
    switch ($variant) {
      case 'outline':
        return css`
          background: transparent;
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        `;
      default:
        return css`
          background: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          color: ${theme.colors.white};

          &:hover {
            background: ${theme.colors.primaryDark};
            border-color: ${theme.colors.primaryDark};
          }
        `;
    }
  }}
`;

export const Button = styled.button<ButtonProps>`
  ${buttonStyles}
`;

export const ButtonLink = styled.a<ButtonProps>`
  ${buttonStyles}
`;
