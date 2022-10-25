/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// Global Variables
let LAST_QUOTE;
let LAST_COLOR;

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Goodbye everyone, I'll remember you all in therapy.",
    source: "Sheldon J. Plankton",
  },
  {
    quote: "Did you smell it? That smell. A kind of smelly smell. The smelly smell that smells...smelly.",
    source: "Eugene H. Krabs",
    citation: "Help Wanted",
    year: 1999,
    tag: "S1E1"
  },
  {
    quote: "The inner machinations of my mind are an enigma.",
    source: "Patrick Star",
    citation: "The Secret Box",
    year: 2001,
    tag: "S2E35"
  },
  {
    quote: "If I were to die right now in a fiery explosion due to the carelessness of a friend…. Then it would just be alright.",
    source: "Spongebob Squarepants",
    citation: "Dying For Pie",
  },
  {
    quote: "This is not your average, everyday darkness. This is… ADVANCED darkness.",
    source: "Spongebob Squarepants",
    citation: "Rock Bottom",
    year: 2000
  },
  {
    quote: "I'm ugly and I'm PROUD!!",
    source: "Spongebob Squarepants",
    citation: "Something Smells"
  },
  {
    quote: "Holographic meatloaf? My favorite!",
    source: "Sheldon J. Plankton",
    citation: "The Algae's Always Greener"
  },
  {
    quote: `Give to the Children’s fund? What have the children ever done for me?`,
    source: "Eugene H. Krabs",
  },
  {
    quote: `I’ll have you know that I stubbed by toe last week and only cried for 20 minutes.`,
    source: "Spongebob Squarepants",
    citation: "No Weenies Allowed",
    year: 2002,
    tag: "S3E48"
  },
  {
    quote: `I was trying to tell you that I was choking on snow but the snow melted and turned into water and I drank all the water now I’m better.`,
    source: "Patrick Star",
    citation: "Snowball Effect"
  }
];

const backgroundColors = ["#F22833", "#F97B91", "#0F9DA4", "#268444", "#A37DF5"];

/***
 * `randomNumber` function
***/
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  let randomQuote = randomElement(arr);
  
  while (randomQuote === LAST_QUOTE) {
    randomQuote = randomElement(arr);
  }

  LAST_QUOTE = randomQuote;

  return LAST_QUOTE;
}

/***
 * `getRandomColor` function
***/
function getRandomColor(arr) {
  let randomColor = randomElement(arr);

  while (randomColor === LAST_COLOR) {
    randomColor = randomElement(arr);
  }

  LAST_COLOR = randomColor;

  return LAST_COLOR;
}

/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote(quotes);
  const quoteBox = document.getElementById('quote-box');
  let htmlString = 
  `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;

  if (randomQuote.hasOwnProperty("citation")) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.hasOwnProperty("year")) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.hasOwnProperty("tag")) {
    htmlString += `<p class="tag">${randomQuote.tag}</p>`;
  }

  htmlString += `</p>`;

  if (quoteBox.innerHTML.includes(randomQuote)) {
    randomQuote = getRandomQuote(quotes);
  }

  quoteBox.innerHTML = htmlString;
  document.body.style.backgroundColor = getRandomColor(backgroundColors);
}

/***
 * When page loads initially
***/
window.addEventListener('load', printQuote);

/***
 * 10 second interval for quotes
***/
setInterval(function() {
  printQuote();
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);