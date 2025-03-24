import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import SongDetail from './components/SongDetail/SongDetail';
import SearchBar from './components/SearchBar/SearchBar';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [library, setLibrary] = useState([]);

 // const { data, loading, error, refetch } = useFetch(
 //   searchTerm ? `https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${searchTerm}` : null
 // );
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = `https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${searchTerm}`;
  
  const { data, loading, error, refetch } = useFetch(
    searchTerm ? `${proxyUrl}${apiUrl}` : null
  );


  useEffect(() => {
    console.log('Biblioteca actualizada:', library);
  }, [library]);

  const addToLibrary = (song) => {
    const exists = library.find(item => item.idAlbum === song.idAlbum);
    if (!exists) {
      setLibrary([...library, song]);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            <SearchResults
              data={data}
              loading={loading}
              error={error}
              onAdd={addToLibrary}
              refetch={refetch}
            />
          }
        />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>
      <Library songs={library} />
    </div>
  );
}

export default App;