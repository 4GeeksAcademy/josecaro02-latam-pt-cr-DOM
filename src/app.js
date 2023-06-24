/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //let message = document.getElementById("message")
  let message = document.getElementsByTagName("h1");
  console.log(message);
  //let message = document.getElementsByClassName("alert");

  let messageQuery = document.querySelector("h1");
  //  console.log(messageQuery);

  let messageQueryAll = document.querySelectorAll("h1");
  //  console.log(messageQueryAll[0]);

  /* 
  messageQueryID.addEventListener("mouseover", () => {
    alert("Posaste el mouse encima!"); 
  });
*/
  /*   
  window.alerta = function alerta() {
    alert("Diste click en el h1");
  }; */

  let messageQueryID = document.querySelector("#message");
  let randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber > 5) {
    messageQueryID.innerHTML = "¡Número grande! " + randomNumber;
    messageQueryID.classList.add("numBig");
  } else {
    messageQueryID.innerHTML = "Soy un numero pequeño " + randomNumber;
    messageQueryID.classList.add("numSmall");
    messageQueryID.classList.remove("fontColor");
  }

  let paragraph = document.querySelector(".alert");
  let input = document.querySelector("input");
  let button = document.querySelector("button");

  input.addEventListener("change", () => {
    alert("Cambió la información en el INPUT");
  });

  function funcionEvento(e) {
    input.style.color = "green";
    console.log(e.target);
  }
  button.addEventListener("click", funcionEvento);
};
