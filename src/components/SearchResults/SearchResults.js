import React from 'react';
import Song from '../Song/Song';
import { useDispatch } from 'react-redux';
import { addSong } from '../../redux/libraryActions';
import { ResultsContainer, ResultsList, Message, ErrorContainer, RetryButton } from './SearchResults.styles';

const SearchResults = ({ data, loading, error, refetch }) => {
  const dispatch = useDispatch();

  if (loading) return <Message>Cargando...</Message>;
  if (error) return (
    <ErrorContainer>
      <p>{error}</p>
      <RetryButton onClick={refetch}>Reintentar</RetryButton>
    </ErrorContainer>
  );
  if (!data || !data.album) return <Message>No hay resultados.</Message>;

  const albums = data.album;

  const handleAdd = (album) => {
    const songData = {
      id: album.idAlbum,
      title: album.strAlbum,
      artist: album.strArtist,
      album: album.strAlbum,  
    };
    dispatch(addSong(songData));
  };

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
              onAdd={() => handleAdd(album)}
            />
          </div>
        ))}
      </ResultsList>
    </ResultsContainer>
  );
};

export default SearchResults;
