
import React from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import Barra from "./barra";
import 'bootstrap/dist/css/bootstrap.min.css';

const Ejecicio2 = (props) => {
    
    const [pokemonId, setPokemonId] = useState ("");
    const [img,setImg] = useState ("");
    const [altura,setAltura] = useState ("");
    const [peso,setPeso] = useState ("");
    const [tipos,setTipos] = useState ("");
    const [nom ,setNom] = useState ("");
    const [id ,setId] = useState ("");

useEffect(()=>{
  
 todosLosPokemones(pokemonId)
 console.log(pokemonId);
},[pokemonId])
async function todosLosPokemones(id){
 axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((result) => {
    setNom(result.data.name)
    setId(result.data.id)
      setImg(result.data.sprites.front_default)
      setAltura(result.data.height)
      setPeso(result.data.weight)
      setTipos(result.data.types.map(e=>e.type.name))
  }).catch((err) => {
      
  });
}
console.log(pokemonId);



  return <div>
    <Barra/>

  <h1 className="header">Random Users <input type= "test"name= "username"value= {pokemonId} onChange={event => {setPokemonId (event.target.value);}}/></h1>
  <img src={img} alt="foto de Pokemon" width="500" height="600"></img>
  <h3>pokemon Numero ={id}</h3>
  <h3>{nom}</h3>
  <h3>{altura} Altura</h3>
  <h3>{peso} Peso</h3>
  <h3>tipos = {tipos}</h3>

  {tipos.length> 0 ? (tipos.map((e)=>{
    return(
      <h2>{e}</h2>
      );
    })
  ) : (
    <h1 className="sin resultado">{img}</h1>
  )}
  </div>
}

export default Ejecicio2;