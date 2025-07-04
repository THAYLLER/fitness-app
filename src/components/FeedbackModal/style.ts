import styled, { DefaultTheme } from 'styled-components/native';

const variantColor = {
  success: 'green',
  error: 'red',
  warning: 'yellow',
  info: 'blue',
} as const;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

interface CardProps {
  variant: keyof typeof variantColor;
}

export const Card = styled.View<CardProps & { theme: DefaultTheme }>(({ theme, variant }) => ({
  width: '80%',
  padding: 24,
  borderRadius: 8,
  backgroundColor: theme.colors[variantColor[variant]][100],
  alignItems: 'center',
}));

export const Message = styled.Text<{ theme: DefaultTheme }>(({ theme }) => ({
  marginTop: 12,
  fontFamily: theme.fonts.bold,
  color: theme.colors.gray[900],
  textAlign: 'center',
})); 