import React from 'react'
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <>
    <ul>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/listar'}>Listar</Link>
        </li>
        <li>
            <Link to={'/crear'}>Crear</Link>
        </li>
        <li>
            <Link to={'/login'}>Login</Link>
        </li>
        <li>
            <Link to={'/visualizar'}>Visualizar</Link>
        </li>
    </ul>
    </>
  )
}

export default Menu