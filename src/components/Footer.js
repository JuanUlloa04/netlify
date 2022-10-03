import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{color:'#ffffff', marginRight: '2rem'}} />
                        <div>
                            <p>SpaceJQ by JuanUlloaTech </p>
                            <p>Lima, Perú</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color:'#ffffff', marginRight: '2rem'}} />+51-987654321</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color:'#ffffff', marginRight: '2rem'}} />juanjdev.code@gmail.com</h4>
                    </div>
                </div>
            <div className='right'>
                <h4>Sobre la empresa</h4>
                <p>
                La compañía fue creada por Juan Ulloa en el año 2022 inspirado por los avances tecnológicos que se venian dando con respecto a los viajes al espacio exterior.
                </p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:'#ffffff', marginRight: '1rem'}} />
                    <FaTwitter size={30} style={{color:'#ffffff', marginRight: '1rem'}} />
                    <FaLinkedin size={30} style={{color:'#ffffff', marginRight: '1rem'}} />

                </div>
            </div>
            </div>
        </div>
    )
    }

export default Footer