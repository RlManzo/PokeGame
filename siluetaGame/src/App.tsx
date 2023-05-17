import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2';


const POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmaleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "buterfree",
  "weedle",
  "kakuna",
  "beedril",
   "pidgey",
   "pidgeotto",
   "pidgeot",
   "rattata",
   "raticate",
   "spearow",
   "fearow",
   "ekans",
   "arbok",
   "pikachu",
   "sandshrew",
   "sandslash"
];

const MATCH = Math.floor(Math.random() * POKEMONS.length); 
export default function App() {
  const [hasWon, setHasWon] = useState(false);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
 
  type Form = HTMLFormElement & {
    pokemon: HTMLInputElement
  }
  function handleSubmit(event: React.FormEvent<Form>){
    event.preventDefault();
     const {pokemon} = event.currentTarget; 
     if(pokemon.value.toLowerCase() === POKEMONS[MATCH]){
      setHasWon(true)
      Swal.fire({
        icon:"success",
        title:"You Win!"
      })
      
     }
     else{
      Toast.fire({
        icon: 'error',
        title: 'wrong answer!'
      })
     }
     
  }
  return (
    <div>
      <img height={350} style={{imageRendering: "pixelated", filter: hasWon ? "" : "brightness(0) invert(1) blur(5px)"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`} />
    {hasWon ? (
      <form >
       <button onClick={()=> location.reload()}  className='playAgain btn btn-success'>Play again</button>
       </form>
    ):(
      <form onSubmit={handleSubmit} >
        <div className='btn-group submitClass'>
        <input type="text" name='pokemon'className='submitClass' />
        <button type="submit" className='btn btn-success bottonSubmit'>Submit</button>
        </div>
      </form>)}
      <img src="https://avatars.githubusercontent.com/u/64151210?v=4" className='pokeLogo' />
      </div>
  )
}

