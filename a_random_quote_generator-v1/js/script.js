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
const quotations = [
  // commas are making it into the HTML & periods are making it into "source"
  {
    quote: "Too many pieces of music finish too long after the end.",
    source: "Stravinsky, Igor",
    citation: "Byrne, Robert: The 2,548 Best Things Anybody Ever Said",
  },
  {
    quote: "Behind every beautiful thing there is some kind of pain.",
    source: "Dylan, Bob",
    year: 1973,
  },
  {
    quote:
      "Women are always carried about like corks upon the waves of masculine desires.",
    source: "Mrs. Charmond",
    citation: "The Woodlanders", // Be sure to lookup correct citation format/punctuation
  },
  {
    quote:
      "When the power of love overcomes the love of power, the world will know peace.",
    source: "Jimi Hendrix",
    year: 1968,
  },
  {
    quote:
      "Optimism is an occupational hazard of programming; feedback is the treatment.",
    source: "Kent Beck",
    citation: "Extreme Programming Pxplained: Embrace Change",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  for (let i = 0; i < quotations.length; i++) {
    let randNum = Math.floor(Math.random() * quotations.length);
    randNum = quotations[randNum];
    return randNum;
  }
}

/***
 * `printQuote` function
 ***/
let htmlString;

function printQuote() {
  let randQuote = getRandomQuote();
  htmlString = `<p class="quote">${randQuote.quote}.
    <p class="source">${randQuote.source}.`;
  if (randQuote.citation) {
    htmlString += `<span class="citation">${randQuote.citation}.</p>`; // directions a little unclear about closing p tag
  }
  if (randQuote.year) {
    htmlString += `<span class="year">${randQuote.year}.</p>`; // directions a little unclear about closing p tag
  }
  return htmlString;
}
console.log(printQuote());
document.getElementById("quote-box").innerHTML = htmlString;

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
