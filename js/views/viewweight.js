import {listaPokemons} from "../api/call-to-api.js";
import {Pokemon} from "../models/pokemon.js";
import {removeall} from "../utils/pokemonutil.js";

function filtrar_peso(event){
    /*Event in charge of filtering and drawing the Pokemon on base to their weight. Hide the ol$$ div (all the pokemons) and show the filtered pokemons in the results$$ div. Previously, the function removes pokemon from previous filters */
    const pokemonTofind=event.target.value;
    let foundPokemons;

    if (pokemonTofind==="gordos"){
        foundPokemons= listaPokemons.filter(function(element){return element.weight>200;});
    } else if (pokemonTofind==="flacos")    
        {foundPokemons= listaPokemons.filter(function(element){return element.weight<200;});}
        else {foundPokemons=[...listaPokemons];}
    
    if (foundPokemons){
        let ol$$= document.querySelector("[id='pokedex']");
        const panel$$=document.querySelector("[class='panel']");
        let resultspokemon$$=document.querySelector("[id='result-pokemon']");
        removeall(ol$$) ;
        ol$$=document.createElement("div");
        ol$$.id="pokedex";
        panel$$.appendChild(ol$$);
        ol$$.classList.remove("hide");
        resultspokemon$$.classList.add("hide");
        for (let index = 0; index < foundPokemons.length; index++) {
            const element = foundPokemons[index];
            element.pintar(ol$$)            
        }
    }   
}

export { filtrar_peso };