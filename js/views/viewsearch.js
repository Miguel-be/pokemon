import {listaPokemons} from "../api/call-to-api.js";
import {Pokemon} from "../models/pokemon.js";
import {removeall} from "../utils/pokemonutil.js";

function buscar_pokemon(event){
    /*Event in charge of searching and drawing the Pokemon entered by the user. Hide the ol$$ div (all the pokemons) and show the searched pokemon in the results$$ div. Previously, the function removes pokemon from previous selections */

    const pokemonTofind=event.target.value;
    const foundPokemons= listaPokemons.find(function(element){return element.name.toUpperCase()===pokemonTofind.toUpperCase();});
    if (foundPokemons){
        const ol$$= document.querySelector("[id='pokedex']");
        ol$$.classList.add("hide");
        let resultspokemon$$=document.querySelector("[id='result-pokemon']");
        resultspokemon$$.classList.remove("hide");
        removeall(resultspokemon$$);
        resultspokemon$$=document.createElement("div");
        resultspokemon$$.id="result-pokemon";
        const results$$=document.querySelector("[id='result']");
        results$$.appendChild(resultspokemon$$);
        foundPokemons.pintar(resultspokemon$$);    
    }    
    else {           
           let resultspokemon$$=document.querySelector("[id='result-pokemon']");
           removeall(resultspokemon$$) ;
           const ol$$= document.querySelector("[id='pokedex']");
           ol$$.classList.add("hide");
           resultspokemon$$=document.createElement("div");
           resultspokemon$$.innerHTML=`El pokemon ${pokemonTofind} no existe`;
           resultspokemon$$.id="result-pokemon";
           resultspokemon$$.classList.add("error");
           const results$$=document.querySelector("[id='result']");
           results$$.appendChild(resultspokemon$$);
    }
 }

 export { buscar_pokemon };