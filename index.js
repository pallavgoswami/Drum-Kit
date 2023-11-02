// Detecting Button Press

// Get the number of drum buttons on the page
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button
for (var i = 0; i < numberOfDrumButtons; i++) {
  // Add a click event listener to each drum button
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // When a button is clicked, get the inner HTML (the letter on the button)
    var buttonInnerHTML = this.innerHTML;

    // Call the makeSound function with the button's inner HTML as an argument
    makeSound(buttonInnerHTML);
    // call  the buttonAnimation function with the button's inner HTML as an argument
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

// Add a keydown event listener to the entire document
document.addEventListener("keydown", function (event) { // .addEventListener is a Higher Order Function and function (event) is a Callback Function
  // When a key is pressed, call the makeSound function with the key as an argument
  makeSound(event.key);
  // when a key is pressed, call the buttonAnimation function with the key as an argument
  buttonAnimation(event.key);
});

// Function to play the corresponding sound based on the key or button pressed
function makeSound(key) {
  // Use a switch statement to check which key or button was pressed
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      // If an unsupported key or button is pressed, log it to the console
      console.log("Unsupported key: " + key);
      break;
  }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
