import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { StyledButton } from './style';
import Text from '@components/Text';
import { useTheme } from 'styled-components/native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...rest }: Props) {
  const theme = useTheme();
  return (
    <StyledButton {...rest}>
      <Text weight="bold" color={theme.colors.white[100]} size={16}>
        {title}
      </Text>
    </StyledButton>
  );
} 