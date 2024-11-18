'use strict';

let correct_flag = null;


function startGame() {
  // Create the form HTML
  const formHTML = `
    <form id="query">
        <input type="text" id="nombre_player" placeholder="Write your name" required>
        <button type="submit">Submit</button>
    </form>
  `;

  // Insert the form into the page
  const titulo = document.getElementById("titulo");
  titulo.innerHTML = "Game on!";
  const container = document.getElementById('game-container');
  container.innerHTML = formHTML;

  // Attach event listener to the form for submission
  const form = document.getElementById('query');
  form.addEventListener('submit', gameOn);
}

async function gameOn(event) {
  const form = document.getElementById("query");

  event.preventDefault(); // Prevent form submission
  form.style.display = "none";

  const titulo = document.getElementById("titulo");
  titulo.innerHTML = "Guess the flag!";
  const player_name = document.getElementById("nombre_player").value;
  const container = document.getElementById('game-container');

  const name_placeholder = document.getElementById("nombre");
  name_placeholder.innerHTML = "Player name: " + player_name;

  // Hide the form
  //const form = document.getElementById("query");
  form.style.display = "none";

  const country_api = await fetch("https://restcountries.com/v3.1/all");
  const json_country = await country_api.json();
  const paises = Object.keys(json_country);

  // Fetch and place the flag
  let num_random = Math.floor(Math.random() * paises.length);
  const correctCountryCode = paises[num_random];
  const correctFlag = json_country[correctCountryCode].flags.png;
  const correctFlagName = json_country[correctCountryCode].name.common;

  // Display the correct flag
  let results = document.getElementById("results");
  const img = document.createElement('img');
  img.src = correctFlag || ''; // Handle missing flags
  results.appendChild(img);

  // Now, generate 4 options (3 wrong + 1 correct)
  const check_box_container = document.getElementById("opciones");
  check_box_container.innerHTML = ""; // Clear previous options

  // Randomly select 3 wrong answers
  const wrongCountries = [];
  while (wrongCountries.length < 3) {
    const randomIndex = Math.floor(Math.random() * paises.length);
    const wrongCountryCode = paises[randomIndex];
    const wrongCountryName = json_country[wrongCountryCode].name.common;

    // Ensure that the wrong country is not already chosen
    if (wrongCountryName !== correctFlagName && !wrongCountries.includes(wrongCountryName)) {
      wrongCountries.push(wrongCountryName);
    }
  }

  // Combine the correct flag with the wrong answers and shuffle
  const allCountries = [...wrongCountries, correctFlagName];
  allCountries.sort(() => Math.random() - 0.5); // Shuffle the array

  // Create checkboxes for all options
  for (let i = 0; i < allCountries.length; i++) {
    const countryName = allCountries[i];

    // Create a label and input for the checkbox
    const label = document.createElement("label");
    label.textContent = countryName; // Set the label's text

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = countryName; // Set the value to the country name
    checkbox.name = "countries"; // Optional: Add a name for grouping
    checkbox.id = `checkbox-${countryName.toLowerCase().replace(/\s+/g, "-")}`; // Unique ID

    // Append the checkbox and label to the container
    label.prepend(checkbox); // Add checkbox inside the label
    check_box_container.appendChild(label);

    // Optional: Add a line break for spacing
    check_box_container.appendChild(document.createElement("br"));
  }
    const submit_answer = `
    <form id="next">
        
        <button type="submit">Next</button>
    </form>
  `;
    const submit_place = document.getElementById("next");
    submit_place.innerHTML = submit_answer;

}
