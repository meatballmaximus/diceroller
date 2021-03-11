const numberOfDice = document.getElementById("dice")

function counter() {
	console.log(document.getElementById("dice").value)
}

function roll() {
  var x = Math.floor((Math.random() * 6) + 1);
  document.getElementById("demo").innerHTML = x;
}

