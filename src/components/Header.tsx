import { LinkedIn, GitHub, Email, Menu as MenuIcon } from '@mui/icons-material';
import { IconButton, Button, Unstable_Grid2 as Grid, Typography, AppBar, Toolbar, ButtonGroup, useScrollTrigger, Slide, useMediaQuery, useTheme, Avatar, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
// import pic from '../assets/images/portrait_square.jpg';
// import pic from require('https://ckeatingnh-images.s3.us-east-2.amazonaws.com/portrait_square.jpg');

function Header({ aboutRef, chrisAIRef, writingsProjectsRef }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };
    function scrollToRef(ref) {
        console.log("Attempting to scroll to ref:", ref); // Add this to check if function is called
        if (ref && ref.current) {
            const headerOffset = 64; // Adjust this value based on your header's height
            const elementPosition = ref.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            console.error('Reference is undefined or not yet available.');
        }
    }

    return (
        <Box>
            {isMobile ? (
                <AppBar sx={{ backgroundColor: '#00356b' }}>
                    <Toolbar sx={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        {/* <Typography variant="body1" sx={{ color: 'white', fontFamily: "'Helvetica Neue', monospace",  fontSize: '2rem', marginLeft: 2, marginRight: 2 }}> {/* Added margin to the left */}
                            {/* Chris */}
                        {/* </Typography> */} 
                        {/* <Avatar src={pic} alt="Chris Keating" sx={{ height: '35px', width: '35px', borderRadius: '50%'}} /> */}
                        {/* <ButtonGroup disableElevation variant="contained" aria-label="Basic button group" sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginRight: 0,
                            marginLeft: 'auto',
                            '& .MuiButton-root': {
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '.75rem',
                                backgroundColor: '#00356b',
                                '&:not(:last-child)': {
                                    borderRight: '1px solid white', // Right border for all but last button
                                },
                            },
                            '& .MuiButton-root:not(:first-child)': {
                                borderLeft: '1px solid white', // Left border for all but first button
                            },
                        }}>
                            <Button onClick={() => { console.log("About clicked"); scrollToRef(aboutRef); }}>About</Button>
                            <Button onClick={() => { console.log("Chris AI clicked"); scrollToRef(chrisAIRef); }}>Chris AI</Button>
                            <Button onClick={() => { console.log("Writing clicked"); scrollToRef(writingsProjectsRef); }}>Writing</Button>
                        </ButtonGroup> */}
                        <Typography sx={{ color: 'white', fontFamily: "'Helvetica Neue', monospace",  fontSize: '1rem', alignContent: 'center', marginLeft: 1.5}}> {/* Added margin to the left */}
                            Chris Keating
                        </Typography>
                        <Box sx={{ marginLeft: 'auto' }}>
                        <Avatar
                            src='https://ckeatingnh-images.s3.us-east-2.amazonaws.com/portrait_square.jpg'
                            alt="Chris Keating"
                            sx={{
                                width: '35px',
                                height: '35px',
                                marginRight: 1.5,
                                // border: '1px solid #00356b',
                                // objectFit: 'cover',
                            }}
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            ) : (
                <AppBar sx={{ backgroundColor: '#00356b' }}>
                    <Toolbar sx={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Typography variant="h6" sx={{ color: 'white', fontFamily: "'Helvetica Neue', monospace", fontWeight: 'bold', fontSize: '2rem', marginLeft: 2 }}> {/* Added margin to the left */}
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
                                backgroundColor: '#00356b',
                                '&:not(:last-child)': {
                                    borderRight: '1px solid white', // Right border for all but last button
                                },
                            },
                            '& .MuiButton-root:not(:first-child)': {
                                borderLeft: '1px solid white', // Left border for all but first button
                            },
                        }}>
                            <Button sx={{ color: 'white', fontFamily: "'Helvetica Neue', monospace", fontWeight: 'bold', fontSize: '.75rem', backgroundColor: '#00356b' }} onClick={() => scrollToRef(aboutRef)}>About</Button>
                            <Button sx={{ color: 'white', fontFamily: "'Helvetica Neue', monospace", fontWeight: 'bold', fontSize: '.75rem', backgroundColor: '#00356b' }} onClick={() => scrollToRef(chrisAIRef)}>Chris AI</Button>
                            <Button sx={{ color: 'white', fontFamily: "'Helvetica Neue', monospace", fontWeight: 'bold', fontSize: '.75rem', backgroundColor: '#00356b' }} onClick={() => scrollToRef(writingsProjectsRef)}>Writing</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
            )}
        </Box>
    );
};

export default Header;
