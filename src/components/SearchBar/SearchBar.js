import React, { useState } from 'react';
import { SearchForm, SearchInput, SearchButton } from './SearchBar.styles';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Busca un artista..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchButton type="submit">Buscar</SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
