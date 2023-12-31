import styled, { css } from "styled-components";

interface ExternalLinkProps {
  variant?: "iconLeft";
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["brand-blue"]};
  font-size: ${({ theme }) => theme.fontSizes["components-link"]};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.2s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.55rem;
    height: 0.55rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors["brand-blue"]};
  }

  ${({ variant }) =>
    variant === "iconLeft" &&
    css`
      flex-direction: row-reverse;
    `}
`;
