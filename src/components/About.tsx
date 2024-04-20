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
        <Typography variant="h3" component="h1" sx={{ fontFamily: "'Courier New', monospace", padding: '40px 0 20px 0' }}>
          Hey, I'm Chris
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: "'Courier New', monospace", padding: '20px 0 40px 0' }}>
          I'm currently exploring Senior Healthcare, particularly working on the language barrier that can exist between Spanish-speaking caregivers and English-speaking seniors in the US. I've done data, engineering, and product, and I'm now building my sales skills too. I've been working in startups (with a stint at Twitter for a bit) for the past 6 years. Before that, I studied Economics and Psychology at Yale, where I was also a 2x All-American and 1x National Champion in Men's Lacrosse. Hit me up to chat about Senior Care / AgeTech!
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={3} sx={{ flex: 1, textAlign: 'center' }}>
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
        padding: '30% 0 10% 0',
        // gap: '20px', // Adjust the gap between text and image as needed
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
            <Grid item xs={10} sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ fontFamily: "'Courier New', monospace", textDecoration: 'underline' }}>
          Hey, I'm Chris!
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: "'Courier New', monospace", padding: '20px 0 40px 0' }}>
        I'm currently exploring Senior Healthcare, particularly working on the language barrier that can exist between Spanish-speaking caregivers and English-speaking seniors in the US. I've done data, engineering, and product, and I'm now building my sales skills too. I've been working in startups (with a stint at Twitter for a bit) for the past 6 years. Before that, I studied Economics and Psychology at Yale, where I was also a 2x All-American and 1x National Champion in Men's Lacrosse. Hit me up to chat about Senior Care / AgeTech!
        </Typography>
      </Grid>
      <Grid item sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', margin: '3% 0 3% 0'}}>
          <Typography>
            _______________________________
          </Typography>
        </Grid>
    </Grid>
    )
  )
  )

} 

export default About;

