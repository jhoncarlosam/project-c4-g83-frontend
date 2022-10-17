import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Menu} from "./elements/Header";
import { ListaEventos } from "./events/ListaEventos";
import { Tablero } from "./dashboard/Tablero";
import { Login } from "./users/Login";
import Create from "./users/Create";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
        <Menu/>
        <div className='container'>
            <div className='row align-center'>
                <div className='col m-5'>
                    <Routes>
                        <Route path="/" element={ <ListaEventos/> }></Route>
                        <Route path="/login" element={ <Login/> }></Route>
                        <Route path="/Create" element={ <Create/> }></Route>
                        <Route path="/tablero/*" element={ <Tablero/> }></Route>
                    </Routes>
                </div>
            </div>
        </div>
    </Router>
  </>
);
