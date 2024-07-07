import React from 'react';
import PlayListComponent from './PlayListComponent';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
const Playlist = ({playlists}) => {

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
    }}
    >
      <Typography variant='h4'>Your Playlist...</Typography> 
      <PlayListComponent playlists={playlists}/>
      
      </Box>
  );
};

export default Playlist;