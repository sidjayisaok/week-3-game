//creates our keyboard parameter
var choices = [0,1,2,3,4,5,6,7,8,9];

//set the scoreboard parameters
var win = 0;
var lose = 0;
	
//display scoreboard
document.querySelector('#demo').innerHTML =
	  '<p>Wins: ' + win + '</p>' +
	  '<p>Losses: ' + lose + '</p>';

//keyboard voodoo magic I've yet to fully comprehend	  
document.onkeyup = function guessNumb(event) {
	var myNumb = String.fromCharCode(event.keyCode).toLowerCase();

	//variables used
	var rando = Math.random();
	var compOptions = Math.floor(rando*choices.length);
	var compChoice = choices[compOptions];
	var compNumb = parseInt(compChoice);

	//conditionals for the variables
	if (myNumb == compNumb){
		//track wins
		win++;
		//display victory message
		document.getElementById("demo").innerHTML = "<h3><p>You guessed right!</p></h3>" + "<p>Wins: " + win + "</p>" +
		"<p>Losses: " + lose + "</p>";
	}
	else{
		//track losses
		lose++;
		//display information
		document.getElementById("demo").innerHTML = "<p>You're wrong! The number is " + compNumb + " while you picked " + myNumb + "</p>" +
		 "<p>Wins: " + win + "</p>" +
		 "<p>Losses: " + lose + "</p>";
	}
	  //set losing condition
	  if(lose===5){
		  document.getElementById("demo").innerHTML= "<h3>You're out of guesses! You lose!</h3>";
	  }
	  
};


