
import React from "react";
import Barra from "./barra";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useEffect, useState } from "react";

import Img1 from "../imagenes/1.png"
import Img2 from "../imagenes/2.jpg"
import Img3 from "../imagenes/3.png"
import Img4 from "../imagenes/4.png"
import Img5 from "../imagenes/5.png"
import Img6 from "../imagenes/6.png"
import Img7 from "../imagenes/7.png"
import Img8 from "../imagenes/8.png"
import Img9 from "../imagenes/9.png"
import Img10 from "../imagenes/10.png"
import Img11 from "../imagenes/11.png"
import Img12 from "../imagenes/12.png"
import Img13 from "../imagenes/13.png"
import Img14 from "../imagenes/14.png"
import Img15 from "../imagenes/15.png"

const Ejecicio3 = (props) => {


var numeros = [{id:1,imagen:Img1},{id:2,imagen:Img2},{id:1,imagen:Img3},{id:4,imagen:Img4},{id:5,imagen:Img5},{id:6,imagen:Img6},{id:7,imagen:Img7},{id:8,imagen:Img8},{id:9,imagen:Img9},{id:10,imagen:Img10},{id:11,imagen:Img11},{id:12,imagen:Img12},{id:13,imagen:Img13},{id:14,imagen:Img14},{id:15,imagen:Img15}]
const [pokemonId, setPokemonId] = useState ("");

let mostrar=numeros.filter(e=>e.id<=pokemonId).map(function(e) {
  return e.imagen
  
})



  

  return <div>
    <Barra/>
    <input type= "test"name= "username"value= {pokemonId} onChange={event => {setPokemonId (event.target.value);}}/>
    <div className="contenedorImagenes">
    {mostrar.length> 0 ? (mostrar.map((e)=>{

    return(
      <img src={e} alt="foto de Pokemon" width="90" height="100"></img>
      );
    })
  ) : (
    <h1 className="sin resultado">e</h1>
  )}
  </div>
  </div>
}

export default Ejecicio3;