import React from 'react'
import Logo from '../assets/pokepedia.png'

export const UserPage = () => {
  return (
    <div>
      <form className='form-login'>
        <input type="text" placeholder="Nombre de usuario"/>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button className='btn-registre'>Registrarse</button>
      </form>
      
    </div>
  )
}


