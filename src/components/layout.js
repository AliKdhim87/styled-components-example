import styled from 'styled-components';
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  width: 100%;
  text-align: center;
  padding: 5rem;
`;
