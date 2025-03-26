import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';
import Song from '../Song/Song';
import { LibraryContainer, Message, SongsList } from './Library.styles';

const Library = () => {
  const songs = useSelector((state) => state); // Se obtienen las canciones desde Redux
  const dispatch = useDispatch();
  const hasManySongs = songs.length > 5;

  const handleRemove = (id) => {
    dispatch(removeSong(id));
  };

  return (
    <LibraryContainer hasManySongs={hasManySongs}>
      <h2>Mi Biblioteca</h2>
      {songs.length === 0 ? (
        <Message>No has agregado canciones aún.</Message>
      ) : (
        <SongsList>
          {songs.map((song) => (
            <div key={song.id}>
              <Song 
                id={song.id}
                title={song.title}
                artist={song.artist}
                duration="N/A"
                onRemove={() => handleRemove(song.id)} // se pasa la función de eliminar
              />
            </div>
          ))}
        </SongsList>
      )}
    </LibraryContainer>
  );
};

export default Library;
