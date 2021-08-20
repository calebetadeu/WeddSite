import React from 'react'
import * as S from '../styles/Home';
import MainSection  from '../components/MainSection/MainSection';
import About from './About';
import List from './List';
import Contact from './Contact';
import LocalWedding from './LocalWedding';
import Cards from '../components/Cards/Cards';

const Home = () => {
    return (
        <>
        <S.Container>

        <MainSection />
          <Cards />
        </S.Container>
        
        </>
    )
}

export default Home
