import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery, Grid, Avatar } from '@mui/material';
import headshot from '../assets/images/portrait_square_artsy.jpg'; // Adjust the path as necessary

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    (!isMobile ? (
    <Grid
      container
      sx={{
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '120px',
        gap: '10px', // Adjust the gap between text and image as needed
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <Grid item xs={6} sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ fontFamily: "'Dancing Script', cursive", textDecoration: 'underline', padding: '40px 0 40px 0' }}>
          Hey, I'm Chris!
        </Typography>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid xs={2} item sx={{ flex: 1, textAlign: 'center' }}>
        <Avatar
          src={headshot}
          alt="Chris Keating"

          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '10%',
            border: '1px solid black',
            objectFit: 'cover',
          }}
        />
      </Grid>
    </Grid>
  ) : (











































    <Grid
      container
      sx={{
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        // gap: '20px', // Adjust the gap between text and image as needed
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <Grid item xs={10} sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ fontFamily: "'Dancing Script', cursive", textDecoration: 'underline' }}>
          Hey, I'm Chris!
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
    </Grid>
  )

  )
  );

};

export default About;