const getRandomCard = () => {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}
let player = {
  name: "penky",
  chips: 150
};
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";

let sum = 0;

let messageEl = document.querySelector(".message-el");
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;


const startGame = () => {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard + secondCard];
  sum = firstCard + secondCard;
  renderGame()
}

const renderGame = () => {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got black jack";
    hasBlackJack = true
  } else {
    message = "You're out of the game";
    isAlive = false
  }
  messageEl.textContent = message;
}

const newCard = () => {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

