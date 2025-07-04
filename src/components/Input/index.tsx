import React, { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

import { Wrapper, StyledInput } from './style';
import Text from '@components/Text';
import { useTheme } from 'styled-components/native';

interface Props extends TextInputProps {
  children?: ReactNode;
  error?: string;
}

export default function Input({ children, error, ...rest }: Props) {
  const theme = useTheme();
  return (
    <>
      <Wrapper>
        <StyledInput {...rest} />
        {children}
      </Wrapper>
      {error && (
        <Text color={theme.colors.red[600]} size={12} style={{ width: '100%', marginTop: -12, marginBottom: 8 }}>
          {error}
        </Text>
      )}
    </>
  );
} 