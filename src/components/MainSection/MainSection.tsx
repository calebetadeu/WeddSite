import React from 'react';
import { Button } from '../Button/Button';
import '../MainSection/MainSection.css' ;

const HeroSection=()=> {
  return (
    <div className='hero-container'>
      <video src='/videos/WedVideo.mp4' autoPlay loop muted />
      <h1>Calebe  e Sara </h1>
      <p>11 DE DEZEMBRO</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          type={"submit"}
        >
         Confirme Presença
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          type={"submit"}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
