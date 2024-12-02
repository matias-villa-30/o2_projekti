'use strict';

/*Handle functionality of buttons  */

const rules_button = document.getElementById('rules_button');
rules_button.onclick = () => {
    alert("Game starts after selecting the name of the players. Player move around the board throwing a dice, each square will be a different country, then the players will answer questions about that country, that will win or lose them points. Game finishes when the first player reaches to 100 points. Huom! There are also squares that will surprise the player.");
};

const quit_button = document.getElementById('quit_button');
quit_button.onclick = () => {
  confirm("Are you sure you want to quit the game?");
};

function player_name() {
  // Create the form HTML
  const PlayerForms = `
    <form id="query">
        <input type="text" id="nombre-player1" placeholder="Player 1" required>
        <input type="text" id="nombre-player2" placeholder="Player 2" required>
        <button type="submit">Submit Names</button>
    </form>
  `;

  // Insert the forms into the container
  const container = document.getElementById('field_players');
  container.innerHTML = PlayerForms;

  // Add event listener to the form
  const form = document.getElementById("query");
  form.addEventListener("submit", gameOn);
}

async function gameOn(event) {
  event.preventDefault(); // Prevent form submission

  const player1 = document.getElementById("nombre-player1").value;
  const player2 = document.getElementById("nombre-player2").value;

  // Hide the container with the form
  const container = document.getElementById("field_players");
  container.style.display = "none";

  // Display player names in the stats box

  container.innerHTML = `
    <p>Player 1: ${player1}</p>
    <p>Player 2: ${player2}</p>
  `;
  const reminder = alert("Click roll dice to begin");
}


// Add event listener to the start button
const start_game = document.getElementById("start_button");
start_game.addEventListener("click", player_name);





