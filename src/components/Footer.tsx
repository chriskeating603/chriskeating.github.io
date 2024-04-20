import React from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone'; // If you want to use an icon for the phone number
// import { useHistory } from 'react-router-dom';

const Footer = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '1% 0 1% 0',
          width: '100%',
        }}
      >
        <Typography variant="h6" component="h1" sx={{ fontFamily: "'Courier New', monospace" }}>
          Chris Keating 2024
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
            <IconButton aria-label="LinkedIn" sx={{ color: 'white' }}>
            <a href="https://linkedin.com/in/chriskeating603" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                <LinkedInIcon />
            </a>
            </IconButton>
          <IconButton aria-label="GitHub" sx={{ color: 'white' }}>
            <a href="https://github.com/chriskeating603" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                <GitHubIcon />
            </a>
            </IconButton>
            <IconButton aria-label="Email" sx={{ color: 'white' }}>
            <a href="mailto:ckeating.nh@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                <EmailIcon />
            </a>
            </IconButton>
            {/* <IconButton aria-label="Email" sx={{ color: 'white' }}>
            <a href="tel:6035488033" style={{ color: 'inherit', textDecoration: 'none' }}>
                <PhoneIcon />
            </a>
            </IconButton> */}
        </Box>
      </Box>
    );
  };
  
  export default Footer;