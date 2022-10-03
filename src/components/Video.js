import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Galaxy. Travel.</h1>
                <p>El primer viaje espacial civil del mundo en perú.</p>
                <div>
                    <Link to='/training' className='btn'>Entrenamiento</Link>
                    <Link to='/contact' className='btn btn-light'>Lanzamiento</Link>
                </div>
            </div>
        </div>
    )
}

export default Video