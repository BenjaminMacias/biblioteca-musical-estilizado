import styled from 'styled-components';

export const ResultsContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 1rem;
`;

export const ResultsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorContainer = styled.div`
  color: red;
  margin: 1rem;
`;
export const RetryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  cursor: pointer;
`;