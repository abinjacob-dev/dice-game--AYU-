function dice() {
  var player1 = Math.floor(Math.random() * 6) + 1;
  console.log(player1);
  var player2 = Math.floor(Math.random() * 6) + 1;
  console.log(player2);
 var player1 = "dice"+player1 +".png"
 var player2 = "dice"+player2 +".png"
 var player1dice = "./images/"+player1;
 var player2dice = "./images/"+player2;
 var player1image =document.querySelectorAll("img")[0]
 player1image.setAttribute("src",player1dice)
 var player2image =document.querySelectorAll("img")[1]
 player2image.setAttribute("src",player2dice)
}

dice();
