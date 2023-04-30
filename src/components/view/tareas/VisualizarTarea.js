import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VisualizarTarea() {

    const url = "http://127.0.0.1:8000/api";
    const [vitarea, setVitarea] = useState([]);
    const {id} = useParams();

    useEffect (()=>{
        const mostarTarea = async() =>{
            let res = await axios.get(`${url}/tarea/${id}`)
            setVitarea(res.data)
        }
        mostarTarea();
    },[])
  return (
    <>
      <div>VisualizarTarea</div>
      <div className="visualizarContainer">
        <div className="visualizarContainer__tarea">
          <h2 className="visualizarContainer__tarea-title">{vitarea.nombre}</h2>
          <p className="visualizarContainer__tarea-description">{vitarea.descripcion}</p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisualizarTarea;
