import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery, Grid, Avatar } from '@mui/material';
// import pic from '../assets/images/portrait_square.jpg';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    (!isMobile ? (
    <Grid
      container
      sx={{
        backgroundColor: 'white',
        color: '#00356b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '120px',
        gap: '10px', // Adjust the gap between text and image as needed
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <Grid item xs={6} sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ fontFamily: "'Helvetica Neue', monospace", padding: '40px 0 20px 0' }}>
          Hey, I'm Chris
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: "'Helvetica Neue', monospace", padding: '20px 0 40px 0' }}>
          {/* I'm currently exploring Senior Healthcare, particularly working on the language barrier that can exist between Spanish-speaking caregivers and English-speaking seniors in the US. I'm also excited to work on solving loneliness in seniors. I've worked in data, engineering, and product, and I'm now building my sales skills too. I've worked in startups (with a stint at Twitter for a bit) for the past 6 years. Before that, I studied Economics and Psychology at Yale, where I also played D1 lacrosse and was a 2x All-American and 1x National Champion. Hit me up to chat about Senior Care / AgeTech! */}
          {/* I'm currently exploring the intersection between data science / AI and athletics. I have worked most of my career as a data scientist, at Twitter and a couple startups. For almost my entire life, I have competed in athletics, most notably in lacrosse - I won 1x NCAA Division 1 National Championship and was a 2x All-American at Yale University, and went on to play professionally for two years before hanging up my cleats. Today, I still compete in triathlons and running races. I'm excited to explore the intersection of athletics and Data Science/Ai. Please email me at ckeating.nh@gmail.com if you want to chat about this space!   */}
          I'm exploring the intersection of Athletics + Data Science/AI  - two areas of personal passion and expertise for me. Winning a Division 1 National Championship in Men's Lacrosse at Yale and going on to play professionally made me super-competitive and driven in my pursuits. I continue to compete through triathlons and running races today. Meanwhile, working as a data scientist at Twitter and 2 startups has made me ber-rational and disciplined when analyzing and making decisions. I’m combining these experiences as I explore my next venture - please <a style={{color: '#7d7f7c', textDecoration: 'underline'}} href="mailto:ckeating.nh@gmail.com" >email me</a> if you want to chat about ideas in Athletics + Data!
        </Typography>
      </Grid> 
      <Grid item xs={1}></Grid>
      <Grid item xs={3} sx={{ flex: 1, textAlign: 'center' }}>
        <Avatar
          src='https://ckeatingnh-images.s3.us-east-2.amazonaws.com/portrait_square.jpg'
          alt="Chris Keating"

          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '10%',
            border: '1px solid #00356b',
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
        color: '#00356b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30% 0 10% 0',
        // gap: '20px', // Adjust the gap between text and image as needed
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
            <Grid item xs={10} sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ fontFamily: "'Helvetica Neue', monospace", textDecoration: 'italic' }}>
          Hey, I'm Chris!
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: "'Helvetica Neue', monospace", padding: '20px 0 40px 0' }}>
        {/* I'm exploring the intersection of Athletics + Data Science/AI  - two areas of personal passion and expertise for me. Winning a Division 1 National Championship in Men's Lacrosse at Yale and going on to play professionally made me super-competitive and driven in my pursuits. I continue to compete through triathlons and running races today. Meanwhile, working as a data scientist at Twitter and 2 startups has made me ber-rational and disciplined when analyzing and making decisions. I’m combining these experiences as I explore my next venture - please <a href="mailto:ckeating.nh@gmail.com" >email me</a> if you want to chat about ideas in Athletics + Data!*/}
        I'm exploring the intersection of Athletics + Data Science/AI  - two areas of personal passion and expertise for me. Winning a Division 1 National Championship in Men's Lacrosse at Yale and going on to play professionally made me super-competitive and driven in my pursuits. I continue to compete through triathlons and running races today. Meanwhile, working as a data scientist at Twitter and 2 startups has made me ber-rational and disciplined when analyzing and making decisions. I’m combining these experiences as I explore my next venture - please <a style={{color: '#7d7f7c', textDecoration: 'underline'}} href="mailto:ckeating.nh@gmail.com" >email me</a> if you want to chat about ideas in Athletics + Data!
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


