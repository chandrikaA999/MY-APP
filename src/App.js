// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Playlist from './Playlist/Playlist';

const App = () => {

  const [playlists,setplaylist]=useState([
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Pop' },
    { id: 3, name: 'Hip Hop' },
  ])
  const [playlistCount, setPlaylistCount] = useState(playlists.length);
  return (
    <Router>
      <Navbar playlistCount={playlistCount} />
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route path="/playlist" element={<Playlist playlists={playlists} />} />
      </Routes>
    </Router>
  );
};

export default App;
