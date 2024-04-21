 import { LinkedIn, GitHub, Email, Menu as MenuIcon } from '@mui/icons-material';
 import { IconButton, Button, Unstable_Grid2 as Grid, Typography, AppBar, Toolbar, ButtonGroup, useScrollTrigger, Slide, useMediaQuery, useTheme, Avatar, Box } from '@mui/material';
 import React, { useState, useEffect } from 'react';

 function Header({ aboutRef, chrisAIRef, writingsProjectsRef }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <Box>
    {isMobile ? (
        <AppBar sx={{ backgroundColor: 'black' }}>
        <Toolbar sx={{ alignItems: 'center', justifyContent: 'flex-start' }}>
        <Avatar src={'../assets/images/portrait_square_artsy.jpg'} alt="Chris Keating" sx={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: 2  }}/>
        <ButtonGroup disableElevation variant="contained" aria-label="Basic button group" sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginRight: 0, 
          marginLeft: 'auto',
          '& .MuiButton-root': {
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: '.75rem', 
            backgroundColor: 'black',
            '&:not(:last-child)': {
              borderRight: '1px solid white', // Right border for all but last button
            },
          },
          '& .MuiButton-root:not(:first-child)': {
            borderLeft: '1px solid white', // Left border for all but first button
          },
        }}>
             <Button onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>About</Button>
   <Button onClick={() => chrisAIRef.current.scrollIntoView({ behavior: 'smooth' })}>Chris AI</Button>
   <Button onClick={() => writingsProjectsRef.current.scrollIntoView({ behavior: 'smooth' })}>Writing</Button>
        </ButtonGroup>
        </Toolbar>
        </AppBar>
            ) : (
          <AppBar sx={{ backgroundColor: 'black' }}>
          <Toolbar sx={{ alignItems: 'center', justifyContent: 'flex-start' }}>
          <Typography variant="h6" sx={{ color: 'white', fontFamily: "'Courier New', monospace", fontWeight: 'bold', fontSize: '2rem', marginLeft: 2 }}> {/* Added margin to the left */}
            Chris Keating
          </Typography>
          <ButtonGroup disableElevation variant="contained" aria-label="Basic button group" sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginRight: 3, 
            marginLeft: 'auto',
            '& .MuiButton-root': {
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: '1.1rem', 
              backgroundColor: 'black',
              '&:not(:last-child)': {
                borderRight: '1px solid white', // Right border for all but last button
              },
            },
            '& .MuiButton-root:not(:first-child)': {
              borderLeft: '1px solid white', // Left border for all but first button
            },
          }}>
            <Button sx={{ color: 'white', fontFamily: "'Courier New', monospace", fontWeight: 'bold', fontSize: '.75rem', backgroundColor: 'black' }}>About</Button>
            <Button sx={{ color: 'white', fontFamily: "'Courier New', monospace", fontWeight: 'bold', fontSize: '.75rem', backgroundColor: 'black' }}>Chris AI</Button>
            <Button sx={{ color: 'white', fontFamily: "'Courier New', monospace", fontWeight: 'bold', fontSize: '.75rem', backgroundColor: 'black' }}>Writing</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
        )}
    </Box>
  );
};

export default Header;