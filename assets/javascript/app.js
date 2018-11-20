$(document).ready(function () {

    var topics = [
        "Golden Sun", "Overwatch", "Dark Souls", "Cuphead", "Legend of the Dragoon", 
        "World of Warcraft", "Destiny 2", "Fallout", "Bloodborne", "Katamari Damacy", "Doom",
        "Skyrim", "Final Fantasy", "Street Fighter", "Undertale", "Mortal Kombat"
    ];

    function renderButtons() {

        $("#game-buttons").empty();

        for (var i = 0; i < topics.length; i++) {
            var newButton = $("<button>").text(topics[i]);
            newButton.addClass("game");
            newButton.attr("data-name", topics[i]);
            newButton.text(topics[i]);
            $("#game-buttons").append(newButton);
        };
    };

    function displayGif() {

        $("#games-display").empty();

        var userInput = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=r1K1ocm0NTdNc3AE66KaZ1zs0YVPlgmW&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            console.log(response);

            for (var i = 0; i < response.data.length; i++) {
                var displayDiv = $("<div>");
                displayDiv.addClass("holder");

                var image = $("<img>");
                image.attr("src", response.data[i].images.fixed_height_still.url);
                image.attr("data-still", response.data[i].images.fixed_height_still.url);
                image.attr("data-animate", response.data[i].images.fixed_height.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayDiv.append(image);

                var rating = $("<p> Rating: " + (response.data[i].rating) + "</p>");
                displayDiv.prepend(rating); 

                $("#games-display").append(displayDiv);
            }
        });
    };

    function imageChangeState() {
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("date-state", "still");
        };
    };

    $("#add-game").on("click", function() {
        event.preventDefault();

        var userInput = $("#game-input").val().trim();

        $("#game-input").val("");

        topics.push(userInput);

        renderButtons();
    });

    renderButtons();

    $(document).on("click", ".game", displayGif);
    $(document).on("click", ".gif", imageChangeState);

});