/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// LIBRARY OF QUOTATIONS
const quotations = [
  {
    quote: "Too many pieces of music finish too long after the end.",
    source: "Stravinsky, Igor",
    citation: "Byrne, Robert: The 2,548 Best Things Anybody Ever Said"
  },
  {
    quote: "Behind every beautiful thing there is some kind of pain.",
    source: "Dylan, Bob",
    year: 1973
  },
  {
    quote:
      "Women are always carried about like corks upon the waves of masculine desires.",
    source: "Mrs. Charmond",
    citation: "The Woodlanders"
  },
  {
    quote:
      "When the power of love overcomes the love of power, the world will know peace.",
    source: "Jimi Hendrix",
    year: 1968
  },
  {
    quote:
      "Optimism is an occupational hazard of programming; feedback is the treatment.",
    source: "Kent Beck",
    citation: "Extreme Programming Pxplained: Embrace Change"
  },
];

// Returns a random object from the quotations array of objects
function getRandomQuote() {
  let randNum = Math.floor(Math.random() * quotations.length);
  randNum = quotations[randNum];
  return randNum;
}; 

/* 
Declare htmlString variable which will interpolate the quote object properties
Calls getRandomQuote function, assigns it to a variable to be interpolated by htmlString
If the quote object has a citation, span with "citation" class is concatenated onto the string
If the quote object has a year, span with "year" class is concatenated onto the string

printQuote function then updates the document id "quote-box" with the string after conditionals tested
*/
let htmlString;
function printQuote() {
  let randQuote = getRandomQuote();
  htmlString = `<p class="quote">${randQuote.quote}
    <p class="source">${randQuote.source}`;
  if (randQuote.citation) {
    htmlString += `<span class="citation">${randQuote.citation}</p>`; 
  }
  if (randQuote.year) {
    htmlString += `<span class="year">${randQuote.year}</p>`; 
  }
  document.getElementById("quote-box").innerHTML = htmlString;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
