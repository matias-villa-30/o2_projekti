'use strict';

function startGame() {
  // Create the form HTML
  const formHTML = `
    
    <form id="query">
        <input type="text" id="nombre_player" placeholder="Write your name" required>
        <button type="submit" onclick="gameOn(event)">Submit</button>
    </form>
  `;

  // Insert the form into the page
  const titulo = document.getElementById("titulo").innerHTML = "Game on!";
  const container = document.getElementById('game-container'); // Assuming you have a div with id 'game-container'
  container.innerHTML = formHTML;
}

function gameOn(event) {
  event.preventDefault();
  const player_name = document.getElementById("nombre_player").value;

  const name_placeholder = document.getElementById("nombre");
  name_placeholder.innerHTML = "Player name: " + player_name;

  const form = document.getElementById("query");
  form.style.display = "none";

  const titulo = document.getElementById("titulo");
  titulo.innerHTML = "Game on!";


    }
