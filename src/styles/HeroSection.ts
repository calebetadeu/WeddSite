import image from '../assets/images/back.jpg';
import styled from 'styled-components';

export const Container=styled.div ` 
background-image:  url(${image}) ;
 box-shadow:inset 0 0 0 2000px rgba(196, 196, 174, 0.3);
background-repeat: no-repeat;
background-position: center;
background-size: cover;
top: 0px;
left: 0px;
width: 100%;
height:100%;
;
`
export const Title=styled.div ` 
align-items  :center ;
display: flex;
color:#0D0106 ;

font-size:80px;
position:relative;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
margin: 0;

height: 100px;
font-family: 'Festive', cursive;

`

export const SaveDate=styled.div `
align-items  :center ;
display: flex;
color:#000000 ;
font-size:50px;
position: relative;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
margin: auto;
width: 40vh;
height: 100px;
top: 40vh;
border: 2px solid #0F110C;
box-sizing: border-box;
border-radius: 20px;
font-family: 'Shadows Into Light', cursive;
`
export const Date=styled.div ` 
align-items  :center ;
display: flex;

color:#0D0106 ;
font-size:50px;
position: relative;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
margin: auto;
width: 80vh;
height: 100px;
top: 10vh;

font-family: 'Merienda', cursive;
`


