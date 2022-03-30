import validator from './validator.js';

console.log(validator);

function validarFormulario(){
    let nombre = document.getElementById("nombre").value;
     if (nombre == ""){
      alert ("Ingresa tu nombre por favor");
     }
   }
   