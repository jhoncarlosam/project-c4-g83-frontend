import React from "react";
import ReactDOM from "react-dom/client";
import {Mensaje, Registrados} from "./components/Mensaje";
import Header, {Menu} from "./components/Header";
import { Evento } from "./components/Evento";
import { Equipo } from "./components/Equipo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Menu />
    <Header />
    <Mensaje />
    <Registrados />
    <Evento fecha="2022-09-27" rival1="Medellin" rival2="Nacional"/>
    <Evento fecha="2022-09-27" rival1="Millonarios" rival2="Nacional"/>
    <Evento fecha="2022-09-27" rival1="DIM" rival2="Nacional"/>
    <Equipo nombre="Medellin" jugados={12} promedio={3.4} ultimo="2022-09-15" record={[5,2]} internacional={true} ubicado={{pais: "Colombia", ciudad:"Cali"}} />
  </>
);
