import React from 'react';
import './btn.scss'
const Button = ({type,children,add}) => {
    return ( 
    <button className={`btn  ${add} `} type={type}>{children}</button>
     );
}
 
export default Button;