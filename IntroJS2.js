/* Actividad 2: Introducción a JS
                Ramón quiere hacer una fiesta privada en donde solo entren un número exclusivo de personas, ayúdale al portero a solo dejar pasar a aquellas personas mayores de edad que sean familiares de Ramón
*/

console.clear();   // Función para limpiar la pantalla

console.log('\n Lista exclusiva de personas para ingresar a la fiesta de Ramón. \n ');

// Bloque que ayuda input un valor dado por el usuario
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

const longLista = Number(prompt("¿Cuál es el cupo de invitados?: "));
// console.log(longLista);  // Instrucción para verificar la entrada de invitados

const invitado = new Array(longLista);   // Invitado como un array

// Ciclo para ingresar los nombres de los invitados en un arreglo
for (let i=0;i<=longLista;i++){ 
    invitado[i] = prompt("Nombre del " + i + " invitado: " );    
}
console.log(invitado);

console.log('\n');

const Nombre = prompt('¿Cuál es tú nombre para verificar si estas en la lista?: ');
// console.log(Nombre);
console.log('\n');

const arrayNombre = new Array(longLista);

for(let i=0; i<=longLista; i++){
    arrayNombre[i] = Nombre;
    //console.log(arrayNombre[i]);
    //console.log(invitado[i]);

    if(arrayNombre[i] == invitado[i]){
        //console.log(arrayNombre[i]);
        //console.log(invitado[i]);
        console.log('Estás en la lista. Puedes pasar a la fiesta')
    } 
    else{
        console.log('No estás en la lista. No puedes pasar a la fiesta');
    }
 
}




