function game() {
  var number1 = Math.floor(Math.random() * 6) + 1;
  var randomsource1 = "images/dice" + number1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomsource1);

  var number2 = Math.floor(Math.random() * 6) + 1;
  var randomsource2 = "images/dice" + number2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomsource2);

  if (number1 > number2) {
    document.querySelector("h1").innerHTML = "players 1 wins";
  } else if (number2 > number1) {
    document.querySelector("h1").innerHTML = "players 2 wins";
  } else {
    document.querySelector("h1").innerHTML = "its a tie";
  }
}
