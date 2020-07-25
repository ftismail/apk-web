import React from 'react';
import './header.scss'
const Header = () => {
    return ( 
        <header className='header'>
            <div className='logo-container'><h3 className="logo">DZ-android</h3></div>
            <div className="header-list-container">
                <ul className="header-list">
                    <li>GAMES</li>
                    <li>APPs</li>
                    <li>NEW</li>
                    <li>BEST</li>
                </ul>
            </div>
        </header>
     );
}
 
export default Header;