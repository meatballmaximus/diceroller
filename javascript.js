const numOfDice = document.getElementById("dice");

function roll() {
	var result = [];
	 for (var i = 0; i < numOfDice.value; i++){
  result.push(Math.floor((Math.random() * 6) + 1));
}
return result;
}

function printNumber(number) {
  var results = document.getElementById('results');
  results.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};


