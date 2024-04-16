import React from 'react'
import Logo from '../assets/pokepedia.png'

export const LoginPage = () => {
  return (
    <>
      <form className='form-login'>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button className='btn-registre'>Inciar sesion</button>
      </form>
    </>
    
  )
}


