import React,{useState,useEffect} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Button} from '../styles/Global'

import {Nav,NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,NavItem,NavLinks,NavItemBtn,NavBtnLink} from '../styles/Navbar'


const Navbar=()=> {
    const [click,setClick]=useState(false)
    const [button,setButton]=useState(true)
   
   
    const handleClick=()=> setClick (!click)
    const closeMobileMenu =()=>setClick(false)

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(()=>{
     showButton()   
    }, [])
    
    window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}  >
        <Nav>
            <NavbarContainer>
               <NavLogo to='/'  onClick={handleClick}  >
                   <NavIcon/>
                Calebe e Sara
                   
               </NavLogo>
               <MobileIcon  onClick={handleClick} >
                  <FaTimes />
               </MobileIcon>
               <NavMenu onClick={handleClick} >
                   <NavItem>
                       <NavLinks to='/' onClick={closeMobileMenu} >Inicio</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/About' onClick={closeMobileMenu}  >Sobre Nós</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/list' onClick={closeMobileMenu} >Lista de Presente</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/Contato' onClick={closeMobileMenu} >Local do Casamento</NavLinks>
                   </NavItem>
                  
               </NavMenu>
               
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
