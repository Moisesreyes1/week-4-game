// To get jQuery ready //
$(document).ready(function() {

	// Variables for the game //
	var wins = 0;
	var losses = 0;
	var score = [];

	// To generate random number for crystals //
	var randomNumber = randomCrystals();

	// Function for random number for crystals //
	function randomCrystals () {
		return Math.floor(Math.random() * 120) + 19;
	}

	

	// To display crystal images to screen //
	var crystals = crystalValues();
	 for(var i=0;i<crystals.length;i++){
	 	var images = $("<img/>").attr("src", crystals[i].src)
	 	images.attr("length", crystals[i].length)
	 	$("#crystals").append(images);
	 	console.log(crystals);
	 }

	// Function to assign random value to player's crystal choices //
	function crystalValues () {
		return [
			 {
			 	name:"diamond",
				points: Math.floor(Math.random() * 12) + 1,
				src: "assets/images/diamond.jpg"
			},
			{
				name:"emerald",
				points: Math.floor(Math.random() * 12) + 1,
				src: "assets/images/emerald.jpg"
			},
			{
				name:"ruby",
				points: Math.floor(Math.random() * 12) + 1,
				src: "assets/images/ruby.png"
			},
			{
				name:"sapphire",
				points: Math.floor(Math.random() * 12) + 1,
				src: "assets/images/sapphire.jpg"
			}
		];
	}
	
	
	// Function to set game //
	function setGame() {
		wins = 0;
		losses = 0;
		score = 0;
		console.log(setGame);

	// Random value for crystals //
	crystals = randomCrystals();

	// Render number to page //
	randomNumber = randomCrystals();
	$("#randomCrystal").text(crystals);
	console.log(randomCrystals);
	}

	// Function to update page //
	function updatePage(win) {
		$(".win-losses").empty();
	}

	// Game logic //
	// If player wins //
	if (wins === true) {
		alert ("You win!");
		setGame();
		randomCrystals();
	}

	// If player losses //
	else if (wins === false) {
		alert("The power of the crystals are too much for you! You lost");
		setGame();
		randomCrystals();
	}

	// Function to display crystal choices for player //
	function renderCrystals() {
		for (var key in crystals) {
			var crystalDiv = $("<div class= 'crystals-button' data-name='" + key + "'>");
			var crystalImg = $("<img alt= 'image' class= 'crystal-img'>").attr("src", crystals[key].url);
				crystalDiv.append(crystalImg);
				$("#crystals").append(crystalDiv);

		}
	}

	// Function to update player number //
	function updateNumber(){
		
	}

	// Function to render player number //
	function renderScore () {
		$("#score").html();
		$("#score").html(score);
	}

	// Calling functions to start the game //
	setGame();
	updateNumber();
	crystalValues();
	renderScore();

	// Clicking on crystals //
	$("#crystals").on("click", function() {
		$("#score").text(images);
		

	// Logic //
	if (score === randomNumber) {
		wins++;
		setGame();
		updateNumber(true);
	}
	else if (score > randomNumber) {
		losses++;
		setGame();
		updateNumber(false);
	}
	});
});