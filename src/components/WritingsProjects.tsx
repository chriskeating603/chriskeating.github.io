import React from 'react';
import { Box, Card, CardActionArea, Typography, Grid, CardMedia, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
// import GitHubLogo from '../assets/githubLogo.svg'; // Adjust the path as necessary
// // src/assets/githubLogo.svg
// import PenPaperLogo from '../assets/penPaperLogo.svg'; // Adjust the path as necessary
// require('../assets/images/senior_alone_square.jpeg') ;

// Assuming Article type with added image property
type Article = {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  imageUrl: string; // Assuming each article has an associated image URL
};

const articles: Article[] = [
  {
    id: '1',
    title: '[Article] Why Senior Loneliness Matters',
    subtitle: 'It’s a large problem in US, for many reasons — but it is a problem we can solve, together',
    link: 'https://chriskeating603.medium.com/why-senior-loneliness-matters-154b94343465',
    imageUrl: 'https://ckeatingnh-images.s3.us-east-2.amazonaws.com/senior_alone_square.jpeg',
  },
  
  {
    id: '2',
    title: '[Project] Elder Companion',
    subtitle: 'AI-powered companion to combat loneliness in elderly folks - built in 1 day',
    link: 'https://github.com/chriskeating603/elder-companion',
    imageUrl: 'https://github.com/chriskeating603/elder-companion/blob/main/src/assets/images/logo.png?raw=true',
  },
  {
    id: '3',
    title: '[Demo] Baba\'s App',
    subtitle: 'An app for my grandmother to check the weather in her family\'s location and check out photos in a shared photo album',
    link: 'https://www.loom.com/share/4c6526d651444db5b0cb967aec8fa451',
    imageUrl: 'https://ckeatingnh-images.s3.us-east-2.amazonaws.com/baba_demo.jpg',
  },
  {
    id: '4',
    title: '[Project] Judgement Day',
    subtitle: 'Hackathon project to judge other hackathon projects. Meta-hack, if you will. Got second place at AI Startup Hackathon by SiliconValleyDiary.com',
    link: 'https://github.com/chriskeating603/judgement-day',
    imageUrl: 'https://github.com/chriskeating603/judgement-day/blob/main/web/public/one.png?raw=true',
  },

  // {
  //   id: '4',
  //   title: 'Article Title 4',
  //   subtitle: 'Article Subtitle 4',
  //   link: 'https://github.com/chriskeating603/',
  //   imageUrl: 'path/to/image1.jpg',
  // },
  // Add more articles as needed
];

const HoverCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '100%', // Ensure the card takes full height of its container
  '&:hover': {
    '& .overlay': {
      opacity: 1,
      padding: '5px',
    },
  },
}));

const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  opacity: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'opacity 0.5s ease',
  color: 'white',
}));

const Logo = styled('img')({
  position: 'absolute',
  top: 8,
  right: 8,
  width: 30, // Adjust size as needed
  height: 30, // Adjust size as needed
});

const GrayscaleCardMedia = styled(CardMedia)({
  filter: 'grayscale(100%)', // Apply grayscale filter
});

const Personal = () => {
  return (
    <Container maxWidth="lg" sx={{ width: '80%', margin: 'auto' }}>
      <Box padding={2}>
        <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sx={{ flex: 1, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" sx={{ fontFamily: "'Courier New', monospace", padding: '40px 0 20px 0' }}>
            Human version
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "'Courier New', monospace", padding: '20px 0 40px 0' }}>
            Chris also writes for both human (writing) and computer (code) audiences. Check them out here:
          </Typography>
        </Grid>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
              <CardActionArea href={article.link} target="_blank" rel="noopener noreferrer" style={{ height: '100%' }}>
                <HoverCard>
                  <GrayscaleCardMedia
                    component="img"
                    image={article.imageUrl}
                    alt={article.title}
                    style={{ height: 300, objectFit: 'cover' }}
                  />
                  {/* <Logo src={article.link.includes('github.com') ? GitHubLogo : PenPaperLogo} alt="Logo" /> */}
                  <Overlay className="overlay">
                    <Typography variant="h6">{article.title}</Typography>
                    <Typography variant="body2">{article.subtitle}</Typography>
                  </Overlay>
                </HoverCard>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Personal;