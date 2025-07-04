import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.white[100]};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 32px;
  margin: 24px 0;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 16px;
`;

export const FooterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const FooterLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.blue[700]};
  margin-left: 4px;
`; 