import React from 'react';
import { Link } from 'react-router-dom';
import { SongContainer, SongTitle, SongInfo, AddButton, SongLink } from './Song.styles';

const Song = ({ id, title, artist, duration, onAdd }) => {
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
    </SongContainer>
  );
};

export default Song;