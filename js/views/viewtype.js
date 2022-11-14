import {listaPokemons} from "../api/call-to-api.js";
import {Pokemon} from "../models/pokemon.js";
import {removeall} from "../utils/pokemonutil.js";

function filtrar_tipo(event){
    /*Event in charge of filtering and drawing the Pokemon on base to their type. Hide the ol$$ div (all the pokemons) and show the filtered pokemons in the results$$ div. Previously, the function removes pokemon from previous filters */
    const pokemonTofind=event.target.value;
    let foundPokemons;    

    if (pokemonTofind!="selecciona"){
        foundPokemons= listaPokemons.filter(function(element){
            let tipos=[];
            const primerListado=element.types;
            primerListado.forEach(element => {tipos.push(element.type.name)})  
            if (tipos.indexOf(pokemonTofind)!=-1){return true;}
            else {return false;}
            });            
        }
        else{foundPokemons=[...listaPokemons];}
    
    if (foundPokemons){
        let ol$$= document.querySelector("[id='pokedex']"); 
        removeall(ol$$) ;
        ol$$=document.createElement("div");
        ol$$.id="pokedex";       
        const panel$$=document.querySelector("[class='panel']");
        panel$$.appendChild(ol$$);
        ol$$.classList.remove("hide");
        const resultspokemon$$=document.querySelector("[id='result-pokemon']");
        resultspokemon$$.classList.add("hide");
        for (let index = 0; index < foundPokemons.length; index++) {
            const element = foundPokemons[index];
            element.pintar(ol$$)            
        }
    }  
}



 export { filtrar_tipo };