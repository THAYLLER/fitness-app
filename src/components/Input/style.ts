import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray[300]};
  margin-bottom: 16px;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  height: 44px;
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.gray[900]};
`;

export const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.colors.red[600]};
  font-size: 12px;
  width: 100%;
  margin-top: -12px;
  margin-bottom: 8px;
`; 