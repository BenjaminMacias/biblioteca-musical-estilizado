import React from 'react';

import { SongContainer, SongTitle, SongInfo, AddButton, RemoveButton, SongLink } from './Song.styles';

const Song = ({ id, title, artist, duration, onAdd, onRemove }) => {
  return (
    <SongContainer>
      <SongTitle>
        {id ? <SongLink to={`/song/${id}`}>{title}</SongLink> : title}
      </SongTitle>
      <SongInfo>Artist: {artist}</SongInfo>
      <SongInfo>Duration: {duration}</SongInfo>

      {onAdd && (
        <AddButton onClick={onAdd}>
          Agregar a mi biblioteca
        </AddButton>
      )}

      {onRemove && (
        <RemoveButton onClick={onRemove}>
          Eliminar
        </RemoveButton>
      )}
    </SongContainer>
  );
};

export default Song;
