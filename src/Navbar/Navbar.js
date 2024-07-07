import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Link } from 'react-router-dom';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';


const Navbar = ({ playlistCount }) => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
        MusicApp
      </Typography>
      <IconButton component={Link} to="/playlist" color="inherit">
        <Badge badgeContent={playlistCount} color="secondary" >
          <QueueMusicIcon/>
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;