import React from 'react'
import logo from '../ico.png';
import './Header.css';

const Header = ()=> {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span> Burger Queen. </span>
            </header>
        )
    
}
export default Header;