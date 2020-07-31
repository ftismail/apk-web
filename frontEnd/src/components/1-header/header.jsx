import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss'
const Header = () => {
    return ( 
        <header className='header'>
            <div className='logo-container'><Link to='/'><h3 className="logo">DZ-android</h3></Link></div>
            <div className="header-list-container">
                <ul className="header-list">
                    <li><Link to='/games'>GAMES</Link></li>
                    <li><Link to='/app/ass'>APPs</Link></li>
                    <li><Link to='/new'>NEW</Link></li>
                    <li><Link to='/best'>BEST</Link></li>
                </ul>
            </div>
        </header>
     );
}
 
export default Header;