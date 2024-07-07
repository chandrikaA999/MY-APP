import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button, TextField, DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PlaylistDialogBox = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
      Create Playlist
      <IconButton 
      onClick={handleClose}
      style={{ position: 'absolute', right: 8, top: 8 }}>
        <CloseIcon/></IconButton>
      </DialogTitle>
      <DialogContent dividers>
      <TextField label="Playlist name" variant="outlined" size="small" />
      </DialogContent>
      <DialogActions>
        <Button>Create</Button>
        <Button onClick={handleClose} >
          Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaylistDialogBox;
