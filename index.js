var n=Math.random();
n=n*6 +1;
n=Math.floor(n);
var randomDiceImage1 = "images/dice" + n + ".png"; //dice1.png - dice6.png

var image1=document.querySelectorAll  ("img") [0]; // 
image1.setAttribute("src", randomDiceImage1);

var m=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice"+m+".png";
document.querySelectorAll("img")[1]. setAttribute("src", randomDiceImage2)
if(n>m){
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins!";
}
else if(m>n){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins!";
}
var n = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + n + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var m = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + m + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

function celebrate(winnerText) {
  // Create a pop-up div
  var popup = document.createElement("div");
  popup.innerText = winnerText + " 🥳🎉 Winner dares, Loser Obeys!!😎🎲";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "rgba(92, 156, 168, 0.95)";
  popup.style.color = "#fff";
  popup.style.fontSize = "2.2rem";
  popup.style.padding = "40px 60px";
  popup.style.borderRadius = "20px";
  popup.style.boxShadow = "0 8px 32px #26292b80";
  popup.style.zIndex = "9999";
  popup.style.textAlign = "center";
  popup.style.animation = "popcelebrate 0.5s cubic-bezier(.36,.07,.19,.97)";
  document.body.appendChild(popup);

  setTimeout(function () {
    popup.remove();
  }, 2000);
}


var style = document.createElement('style');
style.innerHTML = `
@keyframes popcelebrate {
  0% { transform: translate(-50%, -50%) scale(0.7); opacity: 0; }
  60% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
`;
document.head.appendChild(style);

if (n > m) {
  document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins! ";
  celebrate("Player 1 Wins!");
} else if (m > n) {
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins!";
  celebrate("Player 2 Wins!");
}