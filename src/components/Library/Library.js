import React from 'react';
import Song from '../Song/Song';
import { LibraryContainer, Message, SongsList } from './Library.styles';

const Library = ({ songs }) => {
  const hasManySongs = songs.length > 5;

  return (
    <LibraryContainer hasManySongs={hasManySongs}>
      <h2>Mi Biblioteca</h2>
      {songs.length === 0 ? (
        <Message>No has agregado canciones aún.</Message>
      ) : (
        <SongsList>
          {songs.map((song, index) => (
            <Song 
              key={index}
              id={song.idAlbum}
              title={song.strAlbum}
              artist={song.strArtist}
              duration="N/A"
            />
          ))}
        </SongsList>
      )}
    </LibraryContainer>
  );
};

export default Library;
