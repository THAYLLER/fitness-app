import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.black[900]};
  border-radius: 4px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;
