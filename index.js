function randomDice(num) {
    var randomDiceImg = "dice" + num + ".png"; //dice1.png ~ dice6.png
    
    var randomImgSrc = "images/" + randomDiceImg; //images/dice1.png ~ images/dice6.png

    return randomImgSrc;
}

var number1 = Math.floor(Math.random() * 6) + 1; //1~6
var number2 = Math.floor(Math.random() * 6) + 1; //1~6

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

var dice1 = randomDice(number1);
var dice2 = randomDice(number2);

img1.setAttribute("src", dice1);
img2.setAttribute("src", dice2);

if (number1 > number2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (number1 < number2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
