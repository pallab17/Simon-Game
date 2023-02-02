// alert("hi");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];


// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

    // Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id"); // red button click hole
    // userChosenColour="red"; store hobe
  
    // Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
  
    //console.log(userClickedPattern);

    playSound(userChosenColour); // red click jodi hoye passing red color to playsound fn
  
  });




function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber]; // buttonColors[0]
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();

   // Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColour);
}


function playSound(name){
    // Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}