import React from 'react'
import * as S from '../styles/Home';
import HeroSection  from '../components/HeroSection';
import About from './About';
import List from './List';
import Contact from './Contact';
import LocalWedding from './LocalWedding';

const Home = () => {
    return (
        <>
        <S.Container>

        <HeroSection />
          
        </S.Container>
        <About/>
        <List/>
        <Contact/>
        <LocalWedding/>
        </>
    )
}

export default Home
