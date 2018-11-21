# Gif-Tastic

Week 3, Homework #6

## Overview

### Built With

For this assignment I utilized HTML, CSS, JavaScript, jQuery, the GIPHY API, and Bootstrap for organizing the viewport.

### Here's How the App Works

* On initialization, the `topics` array of video games are displayed as buttons on the screen using the function `renderButtons()`. It clears any user added buttons, if any, before the buttons from the array are displayed, adds the `game` class attribute, the custom `data-name` attribute, and the text of the array item becomes the text of the button.

* A user can click on any of the buttons, and uses a for loop to iterate through it will run the `displayGif()` function. It clears any existing gifs from the `#games-display` div, and display a list of 10 static gifs pulled from the GIPHY API. When the user clicks the gif, it animates until clicked again. Above each gif is displayed the rating for each image.

* Beneath the list of initial buttons there is a form on the right side of the screen showing the user that they can submit a video game of their own to be added to the list of buttons. Their submission will be pushed to the `topics` array, the giphy API is searched for the title of their submission and the gifs loaded, and then rendered to display in the row of buttons at the top of the screen. They can then click their loaded button and have it display a list of 10 static gifs just like the rest of the buttons.