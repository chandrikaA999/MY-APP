import { Typography } from '@mui/material';
import '../App.css'; 
import React, { useState } from "react";
import DialogBox from '../DialogBox/DialogBox'
import Box from '@mui/material/Box';
import MusicNoteIcon from '@mui/icons-material/MusicNote';


const Song = ({ song }) => {
    const [showPopup, setShowPopup] = useState(false);
    const playlists = ["melody", "pop","classic"];

    const togglePopup = () => {
        setShowPopup(!showPopup); 
    };

    const handleSelectPlaylist = (playlist) => {
        setShowPopup(false); 
        console.log(`Adding ${song} to ${playlist}`);
    };

    return (
        <div>
            <Box>
            <div className='song'>
                
                <MusicNoteIcon />
                <Typography className='song-text' variant="h6">
                    {song}
                </Typography>
                <button className='add-button' onClick={togglePopup}>ADD</button>
                
            </div>
            {showPopup && (
               <DialogBox playlists={playlists} handleSelectPlaylist={handleSelectPlaylist} togglePopup={togglePopup} open={showPopup}/>
            )}
           </Box>
        </div>
    );
};

export default Song;
