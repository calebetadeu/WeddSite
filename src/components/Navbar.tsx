import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from '../styles/Navbar'




 const Navbar =() => {
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
               <MobileIcon  onClick={handleClick}   >
                   {click? <FaBars color="#000" /> : <FaTimes color="#000" />  }
               </MobileIcon>

               <NavMenu onClick={handleClick} click={!click} >
                   <NavItem click={click}  >
                       <NavLinks to='/' onClick={closeMobileMenu} >Inicio</NavLinks>
                   </NavItem>
                   <NavItem click={click}  >
                       <NavLinks to='/About' onClick={closeMobileMenu}  >Sobre</NavLinks>
                   </NavItem>
                   <NavItem  click={click} >
                       <NavLinks to='/Services' onClick={closeMobileMenu} >Desafios dos Jeans</NavLinks>
                   </NavItem>
                  
               </NavMenu>
               
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
