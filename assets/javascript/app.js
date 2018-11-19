$(document).ready(function () {

    var topics = [
        "Golden Sun", "Overwatch", "Dark Souls", "Cuphead", "Legend of the Dragoon", 
        "World of Warcraft", "Destiny 2", "Fallout", "Bloodborne", "Katamari Damacy", "Doom",
        "Skyrim", "Final Fantasy", "Street Fighter", "The Sims", "Undertale", "Mortal Kombat"
    ];

    for (var i = 0; i < topics.length; i++) {
        $("#game-buttons").append(`<button type = 'button' onclick = 'searchGif(${topics[i]})' value = '${topics[i]}'>${topics[i]}</button>`);        
    };

    function gameButtonClicked() {
        var userInput = $("#game-input").val();
        searchGif(userInput);
    };

    function submitButtonClicked() {
        var userInput = $("#game-input").val();
        
        if (userInput) {
            $("#game-buttons").append(`<button type = 'button' onclick = 'searchGif(${userInput})' value = '${userInput}'>${userInput}</button>`);
        };
    };

    function searchGif() {

    };

    function displayGif(response) {

    };

    var queryURL = "";
});