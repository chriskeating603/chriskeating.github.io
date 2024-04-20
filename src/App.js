import React, { useState, useEffect } from 'react';
import './App.css';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { IconButton, Button, Unstable_Grid2 as Grid, Typography, AppBar, Toolbar, ButtonGroup, useScrollTrigger, Slide, useMediaQuery, useTheme, Avatar, Box } from '@mui/material';
import About from './components/About.tsx';
import ChrisAI from './components/ChrisAI.tsx';
import WritingsProjects from './components/WritingsProjects.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    !isMobile ? (
    <React.Fragment>
      <Grid container
        // spacing={2} // Adjust the space between items
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh', minWidth: '80vw' }} // Ensure full viewport height and width
      >
        <Grid item  sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <Header />
        </Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <About />
        </Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', margin: '3% 0 3% 0'}}></Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <ChrisAI />
        </Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', margin: '3% 0 3% 0'}}></Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <WritingsProjects />
        </Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', margin: '3% 0 3% 0'}}></Grid>
        <Grid item sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <Footer />
        </Grid>
      </Grid>
    </React.Fragment>
      
    ) : (
      <React.Fragment>
      <Grid container
        // spacing={2} // Adjust the space between items
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh', minWidth: '100vw' }} // Ensure full viewport height and width
      >
        <Grid item  sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <Header />
        </Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <About />
        </Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', margin: '3% 0 3% 0'}}></Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <ChrisAI />
        </Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', margin: '3% 0 3% 0'}}></Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <WritingsProjects />
        </Grid>
        <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', margin: '3% 0 3% 0'}}></Grid>
        <Grid item sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
          <Footer />
        </Grid>
      </Grid>
    </React.Fragment>
    )

  );
}

export default App;


{/* <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', margin: '3% 0 3% 0'}}>
          <Typography>
            ________________________________________________________________________
          </Typography>
        </Grid> */}