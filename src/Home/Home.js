import React from 'react';
import MusicList from '../MusicList/MusicList';
import { Box, Typography } from '@mui/material';
import CreatePlaylist from '../CreatePlaylist/CreatePlaylist';
const Home = ({playlists,setPlaylistCount,setplaylist,playlistCount}) => {


  return (
    <div>
      
      <Box style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItem:'center',marginTop:'20px'}}>
      <Typography variant='h4' marginLeft='100px'> Welcome to MusicApp</Typography>
      
      <CreatePlaylist playlists={playlists} setPlaylistCount={setPlaylistCount} setplaylist={setplaylist} playlistCount={playlistCount}/>
     
      </Box>
      <MusicList/>
    </div>
  );
};

export default Home;