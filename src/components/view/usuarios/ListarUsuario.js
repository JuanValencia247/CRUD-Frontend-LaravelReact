import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListarUsuario = () => {
  const url = "http://127.0.0.1:8000/api";
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getAllUsuarios();
  }, []);

  //Mostrar los Usarios
  const getAllUsuarios = async () => {
    const res = await axios.get(`${url}/usuarios`);
    setUsuarios(res.data);
  };

  //Eliminar los Usuarios
  const eliminarUsuarios = async (id) => {
    await axios.delete(`${url}/usuario/${id}`);
    getAllUsuarios();
  };
  return (
    <>
      <div>ListarUsuario</div>
      <Link to="/crear">Crear </Link>
      <div className="container">
        <table className="table">
          <thead className="table__head">
            <tr className="table__head-tr">
              <th className="table__head-tr-th">Nombre</th>
              <th className="table__head-tr-th">Edad</th>
              <th className="table__head-tr-th">Accion</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {usuarios.map((usu) => (
              <tr key={usu.id}>
                <td className="table__body-tr-td">{usu.usuario}</td>
                <td className="table__body-tr-td">{usu.edad}</td>
                <td className="table__body-tr-td">
                  <Link to={`/editar/${usu.id}`} className="table__body-tr-button-edit">
                    <i className="bx bx-edit-alt"></i>
                  </Link>
                  <button onClick={() => eliminarUsuarios(usu.id) } className="table__body-tr-button-delete">
                    <i className="bx bxs-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListarUsuario;
