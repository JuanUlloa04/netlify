import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Entrenamiento</h1>
                <p>El entrenamiento completo es una necesidad cuando se viaja al espacio. Ofrecemos capacitación todo incluido para escenarios previos al vuelo y durante el vuelo.</p>
                <Link to='/contact'><button className='btn'>Contacto</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training