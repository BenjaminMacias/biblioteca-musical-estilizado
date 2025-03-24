import React from 'react'; 
import Song from '../Song/Song';
import { ResultsContainer, ResultsList, Message, ErrorContainer, RetryButton } from './SearchResults.styles';

const SearchResults = ({ data, loading, error, onAdd, refetch }) => {
  if (loading) return <Message>Cargando...</Message>;
  if (error) return (
    <ErrorContainer>
      <p>{error}</p>
      <RetryButton onClick={refetch}>Reintentar</RetryButton>
    </ErrorContainer>
  );
  if (!data || !data.album) return <Message>No hay resultados.</Message>;

  const albums = data.album;

  return (
    <ResultsContainer>
      <h2>Resultados de búsqueda</h2>
      <ResultsList>
        {albums.map((album) => (
          <div key={album.idAlbum}>
            <Song
              title={album.strAlbum}
              artist={album.strArtist}
              duration="N/A"
              onAdd={() => onAdd(album)}
            />
          </div>
        ))}
      </ResultsList>
    </ResultsContainer>
  );
};

export default SearchResults;
