const numberOfDice = document.getElementById("dice")


function roll() {
  var x = Math.floor((Math.random() * 6) + 1);
  document.getElementById("demo").innerHTML = x;
}

function numberOfRolls() {
	
}
