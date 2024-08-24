var randomNumber1 = Math.floor((Math.random()*6 + 1))
var image1 = ["./images/dice1.png" , "./images/dice2.png" , "./images/dice3.png" , "./images/dice4.png" , "./images/dice5.png" , "./images/dice6.png" ];
var randomImage1 = image1[randomNumber1 - 1];
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute( "src" , randomImage1 );

var randomNumber2 = Math.floor((Math.random()*6 + 1))
var image2 = ["./images/dice1.png" , "./images/dice2.png" , "./images/dice3.png" , "./images/dice4.png" , "./images/dice5.png" , "./images/dice6.png" ];
var randomImage2 = image2[randomNumber2 - 1];
var palyer2 = document.querySelectorAll("img")[1];
palyer2.setAttribute( "src" , randomImage2 );

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩player 1 wins";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "🚩 player 2 wins";
} else {
    document.querySelector("h1").textContent = " its draw";
}


