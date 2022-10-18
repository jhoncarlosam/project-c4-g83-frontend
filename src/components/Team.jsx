import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../global";

function Team() {
  const [evento, setEvento] = useState([]);

  const fetch = async () => {
    let raw = await axios.get(API + "/api/evento/all", {
      headers: {
        "access-token": localStorage.getItem("TOKEN"),
      },
    });
    setEvento(raw.data);
  };

  const findEquipo = async (id) => {
    
    let raw = await axios.get(API+"/api/equipo", {id:id, _id:"midd"},
    {
      headers: {
        "access-token": localStorage.getItem("TOKEN")
      }
    }
    );

    if(!raw) return "error";
    return raw.data.nombre;
    
   
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="container my-3">
        {evento.map((item, index) => (
          <div
            key={index}
            className="card card-body col-md-8 mx-auto float-center"
          >
            <div className="col-md-6 my-3 offset-3">
              <span className="badge-dark p-3">{item.nombre}</span>
              <span className="badge-dark p-3">{item.fecha}</span>
              <span className="badge-dark p-3">{item.tipo_deporte}</span>
              <div className="row">
                <div className="col-3">junior}</div>
                <span className="badge bg-secondary">{item.marcador}</span>
                <div className="col-3">{}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Team;
