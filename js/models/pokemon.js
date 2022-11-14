import {dar_lavuelta} from "../utils/pokemonutil.js";
import {listaPokemons} from "../api/call-to-api.js";

class Pokemon{
    constructor(position=1, name,imagefront,imageback, id, height, weight, types){
        /*constructor of the pokemon class*/
        this.position=position; /*1 imagefront. 0 imageback*/
        this.name=name;
        this.imagefront=imagefront;
        this.imageback=imageback;
        this.id=id;
        this.height=height;
        this.weight=weight;
        this.types=types;
    }
    pintar(where){
        /*Draw a pokemon in "where" (html elemenet). Boton is to include a "button" to close the card with the Pokemon information (1 --> put a button; 0 (by default) --> not put a button)*/
        
        const div$$=document.createElement("div");    
        div$$.classList.add("card");
        div$$.addEventListener("click",dar_lavuelta.bind(this))
              
        const li$$=document.createElement("div");
        where.appendChild(li$$);
        li$$.appendChild(div$$);               
             
        const title$$=document.createElement("h3");
        title$$.classList.add("card-title");
        title$$.innerHTML=this.name;
    
        const img$$=document.createElement("img");   
        img$$.classList.add("card-image");
    
        this.position?img$$.src=this.imagefront:img$$.src=this.imageback; 
    
        const id$$=document.createElement("p");
        id$$.classList.add("card-subtitle");
        id$$.innerHTML=this.id;
    
        const span$$=document.createElement("p");
        span$$.classList.add("small");
        span$$.innerHTML=`Altura:${this.height} <br/> Peso: ${this.weight}`  

        div$$.appendChild(id$$);
        div$$.appendChild(title$$); 
        div$$.appendChild(img$$);   
        div$$.appendChild(span$$);
    }
    guardar(){
        /*Include a new pokemon in the global array with all the pokemons*/
        listaPokemons.push(this);
    }    
}

export {Pokemon};