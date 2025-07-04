import React from 'react';
import { TextProps } from 'react-native';

import { StyledText } from './style';

interface Props extends TextProps {
  weight?: 'regular' | 'bold';
  color?: string;
  size?: number;
  children: React.ReactNode;
}

export default function Text({ weight = 'regular', color, size, children, ...rest }: Props) {
  return (
    <StyledText weight={weight} color={color} size={size} {...rest}>
      {children}
    </StyledText>
  );
} 