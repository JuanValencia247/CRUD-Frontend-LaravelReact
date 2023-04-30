import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CrearUsuario() {
  const url = "http://127.0.0.1:8000/api/usuario";

  const [usuario, setUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [edad, setEdad] = useState('')

  const navigate = useNavigate()
const crearUsuario = async(e) =>{
  e.preventDefault()
  await axios.post(url, {usuario: usuario, email: email, password: password, edad: edad})
  navigate('/')
}

  return (
    <>
    <div>CrearUsuario</div>
    <form onSubmit={crearUsuario}>
      <input type="text" placeholder='Ingrese usuario' value={usuario} onChange={(e)=> setUsuario (e.target.value)} autoFocus/>
      <input type="email" placeholder='Ingrese email' value={email} onChange={(e)=> setEmail(e.target.value)} required />
      <input type="password" placeholder='ingrese password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
      <input type="text" placeholder='ingrese edad' value={edad} onChange={(e)=> setEdad(e.target.value)} />
      <button type='submit'>Guardar</button>
    </form>
    </>
    

  )
}

export default CrearUsuario