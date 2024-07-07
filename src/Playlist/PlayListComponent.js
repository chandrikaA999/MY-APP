import React from 'react'
import { List,ListItem, Typography } from '@mui/material'
import {Card} from '@mui/material'


const PlayListComponent = ({playlists}) => {
  return (
    <>
        <List>
        {
            playlists.map((playlist)=>(
                <ListItem key={playlist.id} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Card sx={{ width: '200px', padding: '20px', textAlign: 'center' }}>
                    <Typography variant='h5'>{playlist.name}</Typography>
                    </Card>
               </ListItem>
            ))
        } 
        </List>
    
   
    </>
  )
}

export default PlayListComponent