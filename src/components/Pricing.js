import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Básico -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 1 Día -</p>
                    <p>- Vista Panoramica -</p>
                    <p>- Lanzamiento Exclusivo -</p>
                    <p>- Cuarto Privado -</p>
                    <Link to='/contact' className='btn'>Reserva</Link>
                </div>
                <div className='card'>
                    <h3>- Suite -</h3>
                    <span className='bar'></span>
                    <p className='btc'>2 BTC</p>
                    <p>- 2 Días -</p>
                    <p>- Vista Panoramica -</p>
                    <p>- Lanzamiento Exclusivo -</p>
                    <p>- Cuarto Privado -</p>
                    <Link to='/contact' className='btn'>Reserva</Link>
                </div>
                <div className='card'>
                    <h3>- Ejecutivo -</h3>
                    <span className='bar'></span>
                    <p className='btc'>3 BTC</p>
                    <p>- 3 Días -</p>
                    <p>- Vista Panoramica -</p>
                    <p>- Lanzamiento Exclusivo -</p>
                    <p>- Cuarto Privado -</p>
                    <Link to='/contact' className='btn'>Reserva</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing