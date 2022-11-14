import {listaPokemons} from "../api/call-to-api.js";
import {filtrar_tipo} from "../views/viewtype.js";

function dar_lavuelta(element) {
  /*This function shows the position of the pokemon: 1 --> the pokemon is on front of the user. 0 --> the pokemon is back of the user*/
  if (this.position) {
    element.target.src = this.imageback;
    this.position = 0;
  } else {
    element.target.src = this.imagefront;
    this.position = 1;
  }
}

function removeall(where) {
  /*This function remove the html element sent by argument*/
  where.remove();
}

function encontrar_tipos(){
  /*Get all the types of Pokemons to fill the choices of the tag html select*/
  const typesofPokemons = listaPokemons.map(function(pokemon) {return pokemon.types});
  let result=[];
  typesofPokemons.forEach(element => {
    element.forEach(newelement => {
        result.push(newelement.type.name); 
    }); });   
  
  const finalResult = result.filter((item,index)=>{
        return result.indexOf(item) === index;
      });

  const select$$=document.querySelector("[id='cboselectypes']");
  finalResult.forEach(type => {
    let option$$=document.createElement("option");
    option$$.value=type;
    option$$.text=type;
    select$$.appendChild(option$$);    
  });
  
  select$$.addEventListener("change",filtrar_tipo);

  }


export { dar_lavuelta, removeall, encontrar_tipos };