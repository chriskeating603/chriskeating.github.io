import React from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone'; // If you want to use an icon for the phone number
import portrait from '../assets/images/portrait_square_artsy.jpg'; // Adjust the path as necessary
// import { useHistory } from 'react-router-dom';

const Footer = () => {
//   let history = useHistory();

//   const handleNavigate = (path) => {
//     history.push(path);
//   };
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          gap: '10px', // Adjust the gap between items as needed
        }}
      >
        <Typography variant="h6" component="h1">
          Chris Keating
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px', // Adjust the gap between icons as needed
          }}
        >
          <IconButton aria-label="GitHub" sx={{ color: 'white' }}>
            <a href="https://github.com/chriskeating603" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                <GitHubIcon />
            </a>
            </IconButton>
            <IconButton aria-label="LinkedIn" sx={{ color: 'white' }}>
            <a href="https://linkedin.com/in/chriskeating603" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                <LinkedInIcon />
            </a>
            </IconButton>
            <IconButton aria-label="Email" sx={{ color: 'white' }}>
            <a href="mailto:ckeating.nh@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                <EmailIcon />
            </a>
            </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <a href="tel:6035488033" style={{ color: 'inherit', textDecoration: 'none' }}>
                <PhoneIcon sx={{ color: 'white' }} />
            </a>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Footer;