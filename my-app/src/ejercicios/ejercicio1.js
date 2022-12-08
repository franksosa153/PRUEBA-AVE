import React from "react";
import { useState} from 'react'
import Barra from "./barra";
import 'bootstrap/dist/css/bootstrap.min.css';



const Ejecicio1 = () => {
    const [username, setUsername] = useState ("");
  const [username2, setUsername2] = useState ("");
  let num1=username
  let num=username2

  const multiplicar=(a, b)=>{
    let resultado=a/(1/b)
    return resultado
  }
  return <div className="header">
    <Barra/>
    
    <input type= "test"name= "username"value= {username}onChange={event => {setUsername (event.target.value);}}/>
      <input type= "test"name= "username"value= {username2}onChange={event => {setUsername2 (event.target.value);}}/>

      <h1>{multiplicar(num1,num)}</h1>
  </div>;
};

export default Ejecicio1;