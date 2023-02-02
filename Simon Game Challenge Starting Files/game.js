// alert("hi");

var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber]; // buttonColors[0]
  gamePattern.push(randomChosenColour);
}

