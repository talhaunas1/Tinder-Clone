import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons() {
  return (
    <div className='SwipeButtons'>

        <IconButton className='btn_replay MuiIconButtin-root'>
            <ReplayIcon fontSize='large'/>
        </IconButton>

        <IconButton className='btn_close MuiIconButtin-root'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        
        <IconButton className='btn_star MuiIconButtin-root'>
            <StarRateIcon fontSize='large'/>
        </IconButton>
        
        <IconButton className='btn_fvrt MuiIconButtin-root'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>

        <IconButton className='btn_flash MuiIconButtin-root'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>

    </div>
  )
}

export default SwipeButtons