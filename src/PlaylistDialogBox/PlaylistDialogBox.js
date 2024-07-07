import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button, TextField, DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const PlaylistDialogBox = ({ open, handleClose,playlists,setPlaylistCount,setplaylist,playlistCount}) => {
const [playListName,setPlayListName]=useState('');
const handleInputChange=(event)=>(
  setPlayListName(event.target.value)
)

  const handleCreatePlaylist=()=>{
    if(playListName!=''){
      const newId=playlists[playlists.length-1].id +1
      const newPlaylist={id:newId,name:playListName}
      setplaylist([...playlists,newPlaylist]);
      setPlayListName('');
      setPlaylistCount(playlistCount+1)

    }
  }
  const handlePlaylistDialogClose=()=>{
      setPlayListName('');
      handleClose()
  }

  return (
    <Dialog open={open} onClose={handlePlaylistDialogClose}>
      <DialogTitle>
      Create Playlist
      <IconButton 
      onClick={handlePlaylistDialogClose}
      style={{ position: 'absolute', right: 8, top: 8 }}>
        <CloseIcon/></IconButton>
      </DialogTitle>
      <DialogContent dividers>
      <TextField 
      label="Playlist name" 
      variant="outlined" 
      size="small" 
      value={playListName}
      onChange={handleInputChange}
      />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreatePlaylist}>Create</Button>
        <Button onClick={handlePlaylistDialogClose} >
          Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaylistDialogBox;
