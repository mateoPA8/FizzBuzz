//import sumar from "./sumador";
import buzz from "./buzz";
import fizz from "./fizz";
import fizzbuzz from "./fizzbuzz";

 //const first = document.querySelector("#primer-numero");
 //const second = document.querySelector("#segundo-numero");
 //const form = document.querySelector("#sumar-form");
//const div = document.querySelector("#resultado-div");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstNumber = Number.parseInt(first.value);
//   const secondNumber = Number.parseInt(second.value);

//   div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
// });

const numero = document.querySelector("#ingresar-numero");
const formFB = document.querySelector("#fizzbuzz-form");
const divFB = document.querySelector("#resultado-div");

formFB.addEventListener("submit", (event) => {
 event.preventDefault();
  
 const firstNumber = Number.parseInt(numero.value);
    divFB.innerHTML = "<p>" + fizz(firstNumber) + "</p>";
 });