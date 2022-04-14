import validator from './validator.js';

document.getElementById("botonvalidar").addEventListener("click", function(){
    let creditCardNumber = document.getElementById("tarjeta").value;
    if(validator.isValid(creditCardNumber)){
    document.getElementById("validacion").innerHTML = "Tu tarjeta " + 
    validator.maskify(creditCardNumber) + " es válida ✓";
    document.getElementById("validacion").style.color = '#51a400';
  } 
    else {
    document.getElementById("validacion").innerHTML = 
    validator.maskify(creditCardNumber) + " esta tarjeta no es válida";
    document.getElementById("validacion").style.color = '#E80460';
      }
  },
    false);
    