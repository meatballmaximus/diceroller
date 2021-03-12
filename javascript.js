const numOfDice = document.getElementById("dice");

function roll() {
	var result = [];
	 for (var i = 0; i < numOfDice.value; i++){
  result.push(Math.floor((Math.random() * 6) + 1));
}
return result;
}



