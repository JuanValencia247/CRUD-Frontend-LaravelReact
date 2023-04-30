import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios  from "axios";

function EditarUsuario() {
  const url = "http://127.0.0.1:8000/api/usuario/";

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [edad, setEdad] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const actualizarUsuario = async (e) => {
    e.preventDefault();
    await axios.put(`${url}${id}`, {
      usuario: usuario,
      email: email,
      password: password,
      edad: edad,
    });
    navigate("/");
  };

  useEffect(() => {
    const obtenerUsuarioId = async () => {
      const res = await axios.get(`${url}${id}`);
      setUsuario(res.data.usuario);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setEdad(res.data.edad);
    };
    obtenerUsuarioId();
  }, []);
  return (
    <>
      <div>EditarUsuario</div>
      <form onSubmit={actualizarUsuario}>
        <input
          type="text"
          placeholder="Ingrese usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          autoFocus
        />
        <input
          type="email"
          placeholder="Ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ingrese edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <button type="submit">Actualizar</button>
      </form>
    </>
  );
}

export default EditarUsuario;
