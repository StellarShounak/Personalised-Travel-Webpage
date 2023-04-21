import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';




function HeroSection() {

  

  return (
<div className='hero-container'>

<video src='/public/videos/video-2.mp4' autoplay muted loop />
      <h1>ADVENTURE STARTS HERE</h1>
      <p>Get out of your comfort zone!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;