import {getPokemons} from "./api/call-to-api.js";
import { buscar_pokemon } from "./views/viewsearch.js"
import { filtrar_altura } from "./views/viewheight.js";
import { filtrar_peso } from "./views/viewweight.js";

const txtselecciona$$=document.querySelector("[id='txtselecciona']");
const cboselectweight$$=document.querySelector("[id='cboselectweight']");
const cboselectheight$$=document.querySelector("[id='cboselectheight']");

getPokemons();
txtselecciona$$.addEventListener("change",buscar_pokemon);
cboselectweight$$.addEventListener("change",filtrar_peso);
cboselectheight$$.addEventListener("change",filtrar_altura);   







