import React, { useState, useEffect } from 'react';
import './App.css';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { IconButton, Button, Unstable_Grid2 as Grid, Typography, AppBar, Toolbar, ButtonGroup, useScrollTrigger, Slide, useMediaQuery, useTheme, Avatar, Box } from '@mui/material';
import About from './components/About.tsx';
import PastWork from './components/PastWork.tsx';
import Personal from './components/Personal.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
    <Grid container
      spacing={2} // Adjust the space between items
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', width: '100vw' }} // Ensure full viewport height and width
    >
      <Grid item xs={12} sx={{ width: '100vw', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
        <Header />
      </Grid>
      <Grid item xs={12} sx={{ width: '100vw', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
        <About />
      </Grid>
      <Grid item xs={12}>
        <PastWork />
      </Grid>
      <Grid item xs={12}>
        <Personal />
      </Grid>
      <Grid item xs={12}>
        <About />
      </Grid>
      <Grid item xs={12}>
        <PastWork />
      </Grid>
      <Grid item xs={12}>
        <Personal />
      </Grid>
      <Grid item xs={12}>
        <About />
      </Grid>
      <Grid item xs={12}>
        <PastWork />
      </Grid>
      <Grid item xs={12}>
        <Personal />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
    </React.Fragment>

  );
}
{/* </Grid>
    <Grid item xs={12}>
        <About />
      </Grid>
      <Grid item xs={12}>
        <PastWork />
      </Grid>
      <Grid item xs={12}>
        <Personal />
      </Grid>
      <Grid item xs={12}>
        <About />
      </Grid>
      <Grid item xs={12}>
        <PastWork />
      </Grid>
      <Grid item xs={12}>
        <Personal />
      </Grid> */}

export default App;
