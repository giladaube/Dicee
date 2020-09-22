/* functions */

// return a random number between 1-6.
function getRandomNumber() {
  return Math.floor((Math.random() * 6) + 1);
}

// get a player number, and change the h1 in the heading to be "Player X Wins!".
function changeHeadingPlayerXWins(playerNumber) {
  var newHead = "Player " + playerNumber + " Wins!";
  if (playerNumber === 1) {
    newHead = "🚩 " + newHead;
  } else {
    newHead = newHead + " 🚩";
  }
  document.querySelector(".heading h1").textContent = newHead;
}

// get a player and a dice number and change the image of the dice.
function changeDiceImage(playerNumber, diceNumber) {
  var dice = "dice" + diceNumber;
  var altText = dice + "-image";
  var imageSrc = "images\\" + dice + ".png";
  var player = document.querySelectorAll(".players .dice-image")[playerNumber - 1];
  player.setAttribute("src", imageSrc);
  player.setAttribute("alt", altText);
}


// get two random numbers.
var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();

// change the heading.
if (randomNumber1 > randomNumber2) {
  changeHeadingPlayerXWins(1);
} else if (randomNumber1 < randomNumber2) {
  changeHeadingPlayerXWins(2);
} else {
  document.querySelector(".heading h1").textContent = "Draw!";
}

// change the dice images
changeDiceImage(1, randomNumber1);
changeDiceImage(2, randomNumber2);

// document.querySelectorAll(".dice-image")
// document.querySelectorAll(".players .dice-image")[0].setAttribute("src", "images\\dice1.png");
