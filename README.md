# Random Quote Generator

## Summary

A web-based Random Quote Generator written with HTML, CSS, and basic Vanilla JS syntax and patterns.
The quotes are served from within the project files. The application selects a quotation from the library at random either every 8 seconds or once a user clicks "show another quote".

## Details

The quote generator consists of the following:

- a library of quotations from classic literature, programmers writing about programming, and musicicans

- a function (getRandomQuote) that randomly selects a quotation object at it's respective index number within the "quotations" array

- a function (printQuote) that calls the getRandomQuote function, use the returned quote object to build a string of HTML and quote properties, then uses that string to display a random quote in the browser

- a randomRGB function that sets the browser background to a random color each time a new quotation is displayed

- the setInterval method to change the randomly selected quote every 10 seconds and

- a "click" event listener with the printQuote() callback

## To use:

1. Download code
2. Start a live server on local machine
3. Open index.html in preferred browser
4. Click "show anohter quote" button to load another quotation or simpy wait 8 seconds for a new quotation to load
