import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Tu Nombre</label>
                <input type='text'></input>
                <label>Correo</label>
                <input type='email'></input>
                <label>Asunto</label>
                <input type='text'></input>
                <label>Mensaje</label>
                <textarea rows='6' placeholder='Escriba un mensaje corto aquí' />
                <button className='btn'>Enviar</button>
            </form>
        </div>
    )
}

export default Form
