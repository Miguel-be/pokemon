import {Pokemon} from "../models/pokemon.js";
import {encontrar_tipos} from "../utils/pokemonutil.js";

var pokemons=[];
var listaPokemons=[];

async function getPokemons(){
    /*Use two divs to show Pokemons: results$$ to show individuals Pokemons and ol$$ to show all the pokemons or a group of them as result of applying any filter.

    This function hides results$$ and get all the pokemons in one shoot from the api. Move all the pokemons from the api to an internal array of Pokemon object and draw all the pokemons in the ol$$ div. 
    
    Finally, this function creates the events to filter and search Pokemons*/
    const resultspokemon$$=document.querySelector("[id='result-pokemon']");
    resultspokemon$$.classList.add("hide");
    const summaryInfo= await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");    
    const summaryPokemon=await summaryInfo.json();     
    pokemons=[...summaryPokemon.results];   
    
    for (let index = 0; index < pokemons.length; index++) {
      const element = pokemons[index];
      const pokemonAll = await fetch(element.url);
      const pokemondetail = await pokemonAll.json();
      const imagefront = pokemondetail.sprites.front_default;
      const imageback= pokemondetail.sprites.back_default;
      const name = pokemondetail.forms[0].name;
      const id = pokemondetail.id;
      const height=pokemondetail.height;
      const weight=pokemondetail.weight;
      const ol$$= document.querySelector("[id='pokedex']");
      const types=pokemondetail.types;
      const newPokemon = new Pokemon(1, name, imagefront, imageback, id,height,weight,types);
      newPokemon.guardar();
      newPokemon.pintar(ol$$);           
    }
    encontrar_tipos();  
}

export {listaPokemons, pokemons}
export {getPokemons}