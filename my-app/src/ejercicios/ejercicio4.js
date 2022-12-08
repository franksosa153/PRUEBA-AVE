
import React from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import Barra from "./barra";
import 'bootstrap/dist/css/bootstrap.min.css';

const Ejecicio4 = (props) => {
  const [id ,setId] = useState ("");


  return <div>
    <Barra/>

  <h1 className="header">cuantas mostrar<input type= "test"name= "username"value= {Id} onChange={event => {setId (event.target.value);}}/></h1>

  {tipos.length> 0 ? (tipos.map((e)=>{
    return(
      <h2>{e}</h2>
      );
    })
  ) : (
    <h1 className="sin resultado">{}</h1>
  )}
  </div>
}

export default Ejecicio4;