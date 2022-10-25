/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Goodbye everyone, I'll remember you all in therapy.",
    source: "Sheldon J. Plankton",
    // citation: "The Algae's Always Greener",
    // year: 2001
  },
  {
    quote: "Did you smell it? That smell. A kind of smelly smell. The smelly smell that smells...smelly.",
    source: "Mr. Krabs",
    citation: "Help Wanted",
    year: 1999
  },
  {
    quote: "The inner machinations of my mind are an enigma.",
    source: "Patrick Star",
    citation: "The Secret Box",
    year: 2001
  },
  {
    quote: "If I were to die right now in a fiery explosion due to the carelessness of a friend…. Then it would just be alright.",
    source: "Spongebob Squarepants",
    citation: "Dying For Pie",
    year: 2000
  },
  {
    quote: "This is not your average, everyday darkness. This is… ADVANCED darkness.",
    source: "Spongebob Squarepants",
    citation: "Rock Bottom",
    year: 2000
  },
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote(quotes);
  let htmlString = 
  `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source} 
  `;

  if (randomQuote.hasOwnProperty("citation")) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`
    console.log('Object has citation');
  }
  if (randomQuote.hasOwnProperty("year")) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }

  htmlString += `</p>`;
  document.getElementById('quote-box').innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);