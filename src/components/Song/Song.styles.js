import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SongContainer = styled.div`
  background-color: white;
  margin: 10px auto;
  padding: 15px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: left;
`;

export const SongTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const SongInfo = styled.p`
  margin: 5px 0;
  color: #666;
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover || '#005fa3'};
  }
`;

export const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme.colors.danger || '#e74c3c'};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerHover || '#c0392b'};
  }
`;

export const SongLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
