import styled from 'styled-components/native';

interface Props {
  weight: 'regular' | 'bold';
  color?: string;
  size?: number;
}

export const StyledText = styled.Text<Props>`
  font-family: ${({ theme, weight }) =>
    weight === 'bold' ? theme.fonts.bold : theme.fonts.regular};
  color: ${({ theme, color }) => color || theme.colors.gray[900]};
  ${({ size }) => (size ? `font-size: ${size}px;` : '')};
`; 