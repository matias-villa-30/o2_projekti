'use strict';

async function kysymys5(event) {
    event.preventDefault(); // Prevent default form behavior

    const titulo = document.getElementById("titulo");
    const results = document.getElementById("results");
    const check_box_container = document.getElementById("opciones");

    // Clear previous content
    results.innerHTML = "";
    check_box_container.innerHTML = "";

    // Fetch country data
    const country_api = await fetch("https://restcountries.com/v3.1/all");
    const json_country = await country_api.json();

    // Filter valid countries with population and flags
    const validCountries = json_country.filter(
        (country) => country.population && country.flags
    );

    // Select a random country for the correct answer
    const num_random = Math.floor(Math.random() * validCountries.length);
    const correctCountry = validCountries[num_random];
    const correctPopulation = correctCountry.population;
    const correctFlag = correctCountry.flags.png;
    const correctName = correctCountry.name.common;

    // Update question title
    titulo.innerHTML = `Guess the population of ${correctName}`;

    // Display the correct country's flag
    const img = document.createElement("img");
    img.src = correctFlag;
    img.alt = `${correctName} flag`;
    results.appendChild(img);

    // Generate 3 wrong options
    const wrongPopulations = [];
    while (wrongPopulations.length < 3) {
        const randomIndex = Math.floor(Math.random() * validCountries.length);
        const wrongCountry = validCountries[randomIndex];
        const wrongPopulation = wrongCountry.population;

        // Ensure unique and non-matching wrong answers
        if (wrongPopulation !== correctPopulation && !wrongPopulations.includes(wrongPopulation)) {
            wrongPopulations.push(wrongPopulation);
        }
    }

    // Combine correct and wrong answers, then shuffle
    const allOptions = [...wrongPopulations, correctPopulation];
    allOptions.sort(() => Math.random() - 0.5); // Shuffle options

    // Create checkboxes for all options
    allOptions.forEach((option) => {
        const label = document.createElement("label");
        label.textContent = option.toLocaleString(); // Format the number with commas

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        checkbox.name = "population";
        checkbox.id = `checkbox-${option}`;

        label.prepend(checkbox);
        check_box_container.appendChild(label);
        check_box_container.appendChild(document.createElement("br"));
    });

    // Add a submit button for the next step
    const submit_place = document.getElementById("next");
    submit_place.innerHTML = `
        <form id="nextForm">
            <button type="submit">Next</button>
        </form>
    `;
}


async function kysymys4(event) {
    event.preventDefault(); // Prevent default form behavior

    const titulo = document.getElementById("titulo");
    const results = document.getElementById("results");
    const check_box_container = document.getElementById("opciones");

    // Clear previous content
    results.innerHTML = "";
    check_box_container.innerHTML = "";

    // Fetch country data
    const country_api = await fetch("https://restcountries.com/v3.1/all");
    const json_country = await country_api.json();

    // Filter valid countries with currencies and flags
    const validCountries = json_country.filter(
        (country) => country.currencies && country.flags
    );

    // Select a random country for the correct answer
    const num_random = Math.floor(Math.random() * validCountries.length);
    const correctCountry = validCountries[num_random];
    const correctCurrency = Object.values(correctCountry.currencies)[0].name; // Extract currency name
    const correctFlag = correctCountry.flags.png;
    const correctName = correctCountry.name.common;

    // Update question title
    titulo.innerHTML = `Guess the currency of ${correctName}`;

    // Display the correct country's flag
    const img = document.createElement("img");
    img.src = correctFlag;
    img.alt = `${correctName} flag`;
    results.appendChild(img);

    // Generate 3 wrong options
    const wrongCurrencies = [];
    while (wrongCurrencies.length < 3) {
        const randomIndex = Math.floor(Math.random() * validCountries.length);
        const wrongCountry = validCountries[randomIndex];
        const wrongCurrency = Object.values(wrongCountry.currencies)[0]?.name;

        // Ensure unique and non-matching wrong answers
        if (wrongCurrency && wrongCurrency !== correctCurrency && !wrongCurrencies.includes(wrongCurrency)) {
            wrongCurrencies.push(wrongCurrency);
        }
    }

    // Combine correct and wrong answers, then shuffle
    const allOptions = [...wrongCurrencies, correctCurrency];
    allOptions.sort(() => Math.random() - 0.5); // Shuffle options

    // Create checkboxes for all options
    allOptions.forEach((option) => {
        const label = document.createElement("label");
        label.textContent = option;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        checkbox.name = "currencies";
        checkbox.id = `checkbox-${option.toLowerCase().replace(/\s+/g, "-")}`;

        label.prepend(checkbox);
        check_box_container.appendChild(label);
        check_box_container.appendChild(document.createElement("br"));
    });

    // Add a submit button for the next step
    const submit_place = document.getElementById("next");
    submit_place.innerHTML = `
        <form id="nextForm">
            <button type="submit" onclick="kysymys5(event)">Next</button>
        </form>
    `;
}


async function kysymys3(event) {
    event.preventDefault(); // Prevent default form behavior

    const titulo = document.getElementById("titulo");
    const results = document.getElementById("results");
    const check_box_container = document.getElementById("opciones");

    // Clear previous content
    results.innerHTML = "";
    check_box_container.innerHTML = "";

    // Fetch country data
    const country_api = await fetch("https://restcountries.com/v3.1/all");
    const json_country = await country_api.json();

    // Filter valid countries with languages and flags
    const validCountries = json_country.filter(
        (country) => country.languages && Object.keys(country.languages).length > 0 && country.flags
    );

    // Select a random country for the correct answer
    const num_random = Math.floor(Math.random() * validCountries.length);
    const correctCountry = validCountries[num_random];
    const correctLanguages = Object.values(correctCountry.languages).join(", ");
    const correctFlag = correctCountry.flags.png;
    const correctName = correctCountry.name.common;

    // Update question title
    titulo.innerHTML = `Guess the language of ${correctName}`;

    // Display the correct country's flag
    const img = document.createElement("img");
    img.src = correctFlag;
    img.alt = `${correctName} flag`;
    results.appendChild(img);

    // Generate 3 wrong options
    const wrongLanguages = [];
    while (wrongLanguages.length < 3) {
        const randomIndex = Math.floor(Math.random() * validCountries.length);
        const wrongCountry = validCountries[randomIndex];
        const wrongLanguage = Object.values(wrongCountry.languages).join(", ");

        // Ensure unique and non-matching wrong answers
        if (wrongLanguage !== correctLanguages && !wrongLanguages.includes(wrongLanguage)) {
            wrongLanguages.push(wrongLanguage);
        }
    }

    // Combine correct and wrong answers, then shuffle
    const allOptions = [...wrongLanguages, correctLanguages];
    allOptions.sort(() => Math.random() - 0.5); // Shuffle options

    // Create checkboxes for all options
    allOptions.forEach((option) => {
        const label = document.createElement("label");
        label.textContent = option;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        checkbox.name = "languages";
        checkbox.id = `checkbox-${option.toLowerCase().replace(/\s+/g, "-")}`;

        label.prepend(checkbox);
        check_box_container.appendChild(label);
        check_box_container.appendChild(document.createElement("br"));
    });

    // Add a submit button for the next step
    const submit_place = document.getElementById("next");
    submit_place.innerHTML = `
        <form id="nextForm">
            <button type="submit" onclick="kysymys4(event)">Next</button>
        </form>
    `;
}


async function kysymys2(event) {
    event.preventDefault(); // Prevent default form behavior

    const titulo = document.getElementById("titulo");
    const results = document.getElementById("results");
    const check_box_container = document.getElementById("opciones");


    // Clear previous content
    results.innerHTML = "";
    check_box_container.innerHTML = "";

    // Fetch country data
    const country_api = await fetch("https://restcountries.com/v3.1/all");
    const json_country = await country_api.json();

    // Filter valid countries with a capital and flag
    const validCountries = json_country.filter(
        (country) => country.capital && country.capital.length > 0 && country.flags
    );

    // Select a random country for the correct answer
    const num_random = Math.floor(Math.random() * validCountries.length);
    const correctCountry = validCountries[num_random];
    const correctCapital = correctCountry.capital[0]; // Assume first capital is valid
    const correctFlag = correctCountry.flags.png;
    const correctName = correctCountry.name.common;

    // Update question title
    titulo.innerHTML = `What is the capital of ${correctName}?`;

    // Display the correct country's flag
    const img = document.createElement("img");
    img.src = correctFlag;
    results.appendChild(img);

    // Generate 3 wrong options
    const wrongCountries = [];
    while (wrongCountries.length < 3) {
        const randomIndex = Math.floor(Math.random() * validCountries.length);
        const wrongCountry = validCountries[randomIndex];
        const wrongCapital = wrongCountry.capital[0];

        // Ensure unique and non-matching wrong answers
        if (wrongCapital !== correctCapital && !wrongCountries.includes(wrongCapital)) {
            wrongCountries.push(wrongCapital);
        }
    }

    // Combine correct and wrong answers, then shuffle
    const allOptions = [...wrongCountries, correctCapital];
    allOptions.sort(() => Math.random() - 0.5); // Shuffle options

    // Create checkboxes for all options
    allOptions.forEach((option) => {
        const label = document.createElement("label");
        label.textContent = option;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        checkbox.name = "countries";
        checkbox.id = `checkbox-${option.toLowerCase().replace(/\s+/g, "-")}`;

        label.prepend(checkbox);
        check_box_container.appendChild(label);
        check_box_container.appendChild(document.createElement("br"));
    });
    const submit_answer = `
    <form id="next">
        
        <button type="submit" onclick="kysymys3(event)">Next</button>
    </form>
  `;
    const submit_place = document.getElementById("next");
    submit_place.innerHTML = submit_answer;
}



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
  const results = document.getElementById("results");
    const check_box_container = document.getElementById("opciones");

    // Clear previous content
    results.innerHTML = "";
    check_box_container.innerHTML = "";
}

async function gameOn(event) {
  event.preventDefault(); // Prevent form submission

  const form = document.getElementById("query");
  const playerName = document.getElementById("nombre_player").value;

  // Hide form and update UI
  setupGameUI(form, playerName);

  // Fetch country data and set up the quiz
  const countriesData = await fetchCountriesData();
  setupQuiz(countriesData);
}

// Function to hide form and set up basic UI elements
function setupGameUI(form, playerName) {
  form.style.display = "none";

  const titulo = document.getElementById("titulo");
  titulo.innerHTML = "Guess the flag!";

  const namePlaceholder = document.getElementById("nombre");
  namePlaceholder.innerHTML = "Player name: " + playerName;
}

// Function to fetch country data
async function fetchCountriesData() {
  const countryApi = await fetch("https://restcountries.com/v3.1/all");
  const jsonCountry = await countryApi.json();
  return Object.values(jsonCountry); // Return as an array of country objects
}

// Function to set up the quiz with fetched data
function setupQuiz(countriesData) {
  const randomIndex = Math.floor(Math.random() * countriesData.length);
  const correctCountry = countriesData[randomIndex];
  const correctFlag = correctCountry.flags?.png;
  const correctFlagName = correctCountry.name.common;

  // Display the flag
  displayFlag(correctFlag);

  // Generate options and set up checkboxes
  const wrongCountries = generateWrongAnswers(countriesData, correctFlagName);
  const allOptions = shuffleOptions([...wrongCountries, correctFlagName]);

  setupOptions(allOptions, correctFlagName);
}

// Function to display the correct flag
function displayFlag(flagUrl) {
  const results = document.getElementById("results");
  results.innerHTML = ""; // Clear previous flag
  const img = document.createElement('img');
  img.src = flagUrl || ''; // Handle missing flags
  results.appendChild(img);
}

// Function to generate 3 wrong answers
function generateWrongAnswers(countriesData, correctName) {
  const wrongCountries = [];
  while (wrongCountries.length < 3) {
    const randomIndex = Math.floor(Math.random() * countriesData.length);
    const wrongCountryName = countriesData[randomIndex].name.common;

    if (wrongCountryName !== correctName && !wrongCountries.includes(wrongCountryName)) {
      wrongCountries.push(wrongCountryName);
    }
  }
  return wrongCountries;
}

// Function to shuffle options
function shuffleOptions(options) {
  return options.sort(() => Math.random() - 0.5);
}

// Function to create and display options as checkboxes
function setupOptions(options, correctName) {
  const checkBoxContainer = document.getElementById("opciones");
  checkBoxContainer.innerHTML = ""; // Clear previous options

  options.forEach((countryName) => {
    const label = document.createElement("label");
    label.textContent = countryName;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = countryName;
    checkbox.name = "countries";
    checkbox.id = `checkbox-${countryName.toLowerCase().replace(/\s+/g, "-")}`;

    label.prepend(checkbox);
    checkBoxContainer.appendChild(label);
    checkBoxContainer.appendChild(document.createElement("br"));
  });

  // Add a submit button for proceeding to the next question
  const submitPlace = document.getElementById("next");
  submitPlace.innerHTML = `
    <form id="next">
      <button type="submit" onclick="kysymys2(event)">Next</button>
    </form>
  `;
}


