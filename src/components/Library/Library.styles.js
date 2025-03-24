import styled from 'styled-components';

export const LibraryContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 1rem;
  background-color: ${({ hasManySongs }) => hasManySongs ? '#e8f5e9' : 'transparent'};
  transition: background-color 0.3s ease;
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const SongsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;
