import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const DialogBox = ({ playlists, handleSelectPlaylist, togglePopup, open }) => {
  return (
    <Dialog open={open} onClose={togglePopup} fullWidth>
      <DialogTitle>
        Add to Playlist
        <IconButton 
          aria-label="close" 
          onClick={togglePopup} 
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon/>
        </IconButton>
        
      </DialogTitle>
      <DialogContent dividers>
        <List>
          {playlists.map((playlist, index) => (
            <ListItem button onClick={() => handleSelectPlaylist(playlist)}  key={index}
            sx={{ '&:hover': { backgroundColor: '#3089d2'}}}
            >
              <ListItemText primary={playlist} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={togglePopup} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
