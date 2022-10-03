import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click)


    const [color, setColor] = useState(false)
        const changeColor = () => {
            if(window.scrollY >= 100){
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)


    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><h1>GLX TRVL</h1></Link> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/pricing'>Costo</Link>
                </li>
                <li>
                    <Link to='/training'>Entrenamiento</Link>
                </li>
                <li>
                    <Link to='/contact'>Contacto</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: '#fff'}}/>) : (<FaBars size={20} style={{ color: '#fff'}}/>)}

                
            </div>
        </div>
    )
}

export default Navbar