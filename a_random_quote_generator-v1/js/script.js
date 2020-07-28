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
const quotations = 
  [
    {quote: 'Too many pieces of music finish too long after the end', 
    source: 'Stravinsky, Igor', 
    citation: 'Byrne, Robert: The 2,548 Best Things Anybody Ever Said'}, 

    {quote: 'Behind every beautiful thing there is some kind of pain', 
    source: 'Dylan, Bob', 
    year: 1973}, 

    {quote: 'Women are always carried about like corks upon the waves of masculine desires', 
    source: 'Mrs. Charmond', 
    citation: 'The Woodlanders: Thomas Hardy'}
    
  ];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  for (let i = 0; i < quotations.length; i++) {
    let randNum = Math.floor(Math.random() * quotations.length);
    randNum = quotations[i];
    return randNum;
  }
}
console.log(getRandomQuote());


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);