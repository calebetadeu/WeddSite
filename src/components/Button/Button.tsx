
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

type ButtonProps={
  children:React.ReactNode ;
  type:"submit" | "button" ;
  className:string
  buttonStyle:string ;
  buttonSize:string ; }

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export  const Button = ({
  children,type,buttonStyle,buttonSize,className
}:ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
