import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
