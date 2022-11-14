const panel$$=document.querySelector("[class='panel']");
let ol$$= document.querySelector("[id='pokedex']");
const txtselecciona$$=document.querySelector("[id='txtselecciona']");
const results$$=document.querySelector("[id='result']");
let resultspokemon$$=document.querySelector("[id='result-pokemon']");
const cboselectweight$$=document.querySelector("[id='cboselectweight']");
const cboselectheight$$=document.querySelector("[id='cboselectheight']");
var listaPokemons=[];

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
    pintar(where,detail=0){
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
        if (detail===0)
            {
                span$$.classList.add("small");
                span$$.innerHTML=`Altura:${this.height} <br/> Peso: ${this.weight}` }
        else{
            let linea=`Altura:${this.height} <br/> Peso: ${this.weight} <br/><br/>`;   
            linea=linea + "Pokemon de tipo: ";  
            this.types.forEach(element => {
                let tipo=element.type.name[0].toUpperCase() +  element.type.name.slice(1).toLowerCase();
                linea=linea+ tipo +"<br/>"}); 
            span$$.classList.add("small");
            span$$.innerHTML=linea
        }         

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

function removeall(where){
   /*This function remove the html element sent by argument*/
    where.remove();    
}

function dar_lavuelta(element){
/*This function shows the position of the pokemon: 1 --> the pokemon is on front of the user. 0 --> the pokemon is back of the user*/
 if (this.position){
        element.target.src=this.imageback;
        this.position=0;
    }
    else {element.target.src=this.imagefront;
          this.position=1;}          
}

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

function filtrar_altura(event){
    /*Event in charge of filtering and drawing the Pokemon on base to their height. Hide the ol$$ div (all the pokemons) and show the filtered pokemons in the results$$ div. Previously, the function removes pokemon from previous filters */
    const pokemonTofind=event.target.value;
    let foundPokemons;    

    if (pokemonTofind==="altos"){
        foundPokemons= listaPokemons.filter(function(element){return element.height>15;});
    } else if (pokemonTofind==="bajos") 
        {foundPokemons= listaPokemons.filter(function(element){return element.height<15;});}
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

function buscar_pokemon(event){
    /*Event in charge of searching and drawing the Pokemon entered by the user. Hide the ol$$ div (all the pokemons) and show the searched pokemon in the results$$ div. Previously, the function removes pokemon from previous selections */

    const pokemonTofind=event.target.value;
    const foundPokemons= listaPokemons.find(function(element){return element.name.toUpperCase()===pokemonTofind.toUpperCase();});
    if (foundPokemons){
        const ol$$= document.querySelector("[id='pokedex']");
        ol$$.classList.add("hide");
        let resultspokemon$$=document.querySelector("[id='result-pokemon']");
        resultspokemon$$.classList.remove("hide");
        removeall(resultspokemon$$) ;
        resultspokemon$$=document.createElement("div");
        resultspokemon$$.id="result-pokemon";
        const results$$=document.querySelector("[id='result']");
        results$$.appendChild(resultspokemon$$);
        foundPokemons.pintar(resultspokemon$$,1);    
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
           results$$.appendChild(resultspokemon$$);
    }
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

async function getPokemons(){
    /*Use two divs to show Pokemons: results$$ to show individuals Pokemons and ol$$ to show all the pokemons or a group of them as result of applying any filter.

    This function hides results$$ and get all the pokemons in one shoot from the api. Move all the pokemons from the api to an internal array of Pokemon object and draw all the pokemons in the ol$$ div. 
    
    Finally, this function creates the events to filter and search Pokemons*/

    resultspokemon$$.classList.add("hide");
    const summaryInfo= await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");    
    const summaryPokemon=await summaryInfo.json();   
    const pokemons=[...summaryPokemon.results];   
    
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
      const types=pokemondetail.types;
      const newPokemon = new Pokemon(1, name, imagefront, imageback, id,height,weight,types);
      newPokemon.guardar();
      newPokemon.pintar(ol$$);      
    }

    txtselecciona$$.addEventListener("change",buscar_pokemon);
    cboselectweight$$.addEventListener("change",filtrar_peso);
    cboselectheight$$.addEventListener("change",filtrar_altura);
    encontrar_tipos();
    
}

getPokemons();


