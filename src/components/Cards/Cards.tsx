import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Lista de Presentes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/freeze.jpg'
              text='Geladeira'
              label='Para Casa'
              link="https://www.querodecasamento.com.br/lista-de-casamento/calebeesara/checkout/carrinho/"
            />
            <CardItem
              src='images/Campos.png'
              text='Diárias'
              label='Lua de Mel' 
              link="https://www.youtube.com/watch?v=adLGHcj_fmA"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/nubank.png'
              text='Nos Ajude Ofertando'
              label='Pix'
              link="https://nubank.com.br/pagar/5nbfl/GUZLEPo5jA"
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              link="https://www.youtube.com/watch?v=adLGHcj_fmA"
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              link="https://www.youtube.com/watch?v=adLGHcj_fmA"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
