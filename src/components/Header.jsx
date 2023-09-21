import React, {useState} from "react"
import {FaBars, FaTimes} from 'react-icons/fa';
import { NavLink, Link } from "react-router-dom";

function Navbar(){

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return  <header className="navbar">
                <div className="logo">
                    <img src={require('../assets/images/logo.png')} alt="logo"></img>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' onClick= {handleClick}><Link to="/">Home</Link></li>
                        <li className='nav-item' onClick= {handleClick}><NavLink to="contact">Contacts</NavLink></li>
                </ul>
                <div className="hamburger" onClick= {handleClick}>
                    {click ? (<FaTimes size={30} style={{color: '#fd8a8a'}}/>) : (<FaBars size={30}  style={{color: '#fd8a8a'}} />)}
                </div>
            </header>
}
export default Navbar;