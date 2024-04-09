import React, { useState } from 'react';
import './App.css';
import portrait from './assets/images/portrait.png';
import { LinkedIn, GitHub, Email, Menu as MenuIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Chris Keating</h1>
          <IconButton aria-label="menu" onClick={handleMenuClick} style={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
        </div>
        <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
          <a className="dropdown-menu-item" href="#home">Home</a>
          <a className="dropdown-menu-item" href="#accomplishments">Accomplishments</a>
          <a className="dropdown-menu-item" href="#portfolio">Portfolio</a>
          <a className="dropdown-menu-item" href="#personal">Personal</a>
        </div>
      </header>
      <img src={portrait} alt="Your Portrait" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="Main-content">
        <IconButton aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/chriskeating603', '_blank')}>
          <LinkedIn style={{ color: 'white' }} />
        </IconButton>
        <IconButton aria-label="GitHub" onClick={() => window.open('https://www.github.com/chriskeating603', '_blank')}>
          <GitHub style={{ color: 'white' }} />
        </IconButton>
        <IconButton aria-label="Email" onClick={() => window.location.href = 'mailto:ckeating.nh@gmail.com'}>
          <Email style={{ color: 'white' }} />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
