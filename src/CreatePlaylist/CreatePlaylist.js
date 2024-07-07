import React, { useState } from 'react';
import '../App.css';
import PlaylistDialogBox from '../PlaylistDialogBox/PlaylistDialogBox';


const CreatePlaylist = () => {
  const [createPlaylist, setPlaylist] = useState(false);

  const handlePlaylist = () => {
    setPlaylist(!createPlaylist);
  };

  return (
    <>
      <button className='create-playlist' onClick={handlePlaylist}>Create Playlist</button>
      <PlaylistDialogBox open={createPlaylist} handleClose={handlePlaylist} />
    </>
  );
};

export default CreatePlaylist;
