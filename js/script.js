
// LIBRARY OF QUOTATIONS
const quotations = [
  {
    quote: 'Too many pieces of music finish long after the end.',
    source: 'Igor Stravinsky',
    citation: 'Robert Byrne: The 2,548 Best Things Anybody Ever Said',
    tag: 'Musicians'
  },
  {
    quote: 'Behind every beautiful thing there is some kind of pain.',
    source: 'Bob Dylan',
    year: 1973, 
    tag: 'Musicians'
  },
  {
    quote:
      'Women are always carried about like corks upon the waves of masculine desires.',
    source: 'Mrs. Charmond',
    citation: 'The Woodlanders', 
    tag: 'Classic Lit'
  },
  {
    quote: 'When the power of love overcomes the love of power, the world will know peace.',
    source: 'Jimi Hendrix',
    year: 1968, 
    tag: 'Musicians'
  },
  {
    quote: 'Optimism is an occupational hazard of programming; feedback is the treatment.',
    source: 'Kent Beck',
    citation: 'Extreme Programming Pxplained: Embrace Change', 
    year: 1999,
    tag: 'Programmers'
  },
  {
    quote: 'The whole point of being a serious musician is to avoid verbalization whenever you can.', 
    source: 'Virgil Thomson',
    citation: 'Selected Letters',
    tag: 'Musicians'
  }, 
  {
    quote: 'I studied the humanities to understand logic and programming, and I studied the sciences to understand language and literature.', 
    source: 'David Auerbach', 
    citation: 'Bitwise: A Life in Code', 
    year: 2017,
    tag: 'Programmers'
  }, 
  {
    quote: '[Gabriel] had been held to her by a beautiful thread which it pained him to spoil by breaking, rather than by a chain he could not break.',
    source: 'Thomas Hardy', 
    citation: 'Far from the Madding Crowd', 
    tag: 'Classic Lit'
  }, 
  {
    quote: 'The best way to predict the future is to invent it.', 
    source: 'Alan Kay', 
    citation: 'Meeting at Xerox PARC', 
    year: 1982, 
    tag: 'Programmers'
  }, 
  {
    quote: 'In all toil there is profit, but mere talk leads to sheer loss.',
    citation: 'Proverbs 14:23',
    source: 'King Solomon', 
    tag: 'Classic Lit'
  }
];

// Returns a random object from the quotations array of objects
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotations.length);
  const randomQuote = quotations[randomNum];
  return randomQuote;
}; 

const randomValue = (value) => Math.floor(Math.random() * value);

function randomRGB() {
  const color = `rgb(${randomValue(256)}, ${randomValue(256)}, ${randomValue(256)})`;
  return color;
}; 

/*** 
* Declare htmlString variable which will interpolate the quote object properties
* Calls getRandomQuote function, assigns it to a variable to be interpolated by htmlString
***/

let htmlString;
function printQuote() {
  const randomQuote = getRandomQuote();
  htmlString = `<p class="quote">${randomQuote.quote}</p><p class="source"><span>${randomQuote.source}`;

  if (randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`; 
  }
  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`; 
  }
  if (randomQuote.tag) {
    htmlString += `<span class="tag">${randomQuote.tag}</span></p>`;
  }

  document.getElementById("quote-box").innerHTML = htmlString;
  document.body.style.backgroundColor = randomRGB(); 
};

const interval = setInterval(printQuote, 8000);

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);