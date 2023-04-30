import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
function ListarTarea() {

    const url = "http://127.0.0.1:8000/api";
    const [tarea, setTarea] = useState ([]);
    
    useEffect(()=>{
        listarTareas();
    }, []);

    const listarTareas =async () =>{
        let res = await axios.get(`${url}/tareas`);
        setTarea(res.data);
    }

    // const mostrarTarea =async (id) =>{
    //     // e.preventDefault();
    //      let res = await axios.get(`${url}/tarea/${id}`);
        
    // }
  return (
    <>
      <div>ListarTarea</div>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            {
            tarea.map((t) =>(
            <tr key={t.id}>
              <th scope="row">{t.id}</th>
              <td>{t.nombre}</td>
              <td>{t.descripcion}</td>
              <td>
                <button className="btn btn-primary" >Editar</button>
                <button className="btn btn-danger">Eliminar</button>
                <button className="btn btn-success">
                    <Link to={`/visualizar/${t.id}`}>Visualizar</Link>
                    </button>
              </td>
            </tr>

            ))}
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListarTarea;
