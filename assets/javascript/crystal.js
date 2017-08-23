// To get jQuery ready //
$(document).ready(function() {

	// Variables for the game //
	var wins = 0;
	var losses = 0;
	var score = 0;
	var points = 0;


	// To generate random number for crystals //
	var randomNumber = randomCrystals();

	// Function for random number for crystals //
	function randomCrystals () {
		return Math.floor(Math.random() * 120) + 19;
	}

	

	// To display crystal images to screen //
	var crystals = crystalValues();
	function makeCrystals() {
		for(var i=0;i<crystals.length;i++){
	 		var images = $("<img/>").attr("src", crystals[i].src);
		 	images.attr("data-imagevalue", crystals[i].points);
		 	images.addClass("diamond");
		 	// console.log(images);
		 	$("#crystals").append(images);
		 	// console.log(crystals);
		}	
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
		score = 0;
		//console.log(setGame);

	// Random value for crystals //
	crystals = crystalValues();
	$("#crystals").html("");
	makeCrystals();
	// Render number to page //
	randomNumber = randomCrystals();

	$("#randomCrystal").text(randomNumber);
	//console.log(randomCrystals);
	$("#score").text(score);
	$("#wins").html("<strong>Wins: "+wins+"</strong>");
	$("#losses").html("<strong>Losses: "+losses+"</strong>");
	}

	// Function to update page //
	function updatePage(win) {
		$(".win-losses").empty();
	}

	// // Game logic //
	// // If player wins //
	// if (wins === true) {
	// 	alert ("You win!");
	// 	setGame();
	// 	randomCrystals();
	// }

	// // If player losses //
	// else if (wins === false) {
	// 	alert("The power of the crystals are too much for you! You lost");
	// 	setGame();
	// 	randomCrystals();
	// }

	

	// Function to update player number //
	function updateNumber(){
		
	}

	// Function to render player number //
	function renderScore () {
		
		$("#score").html(score);
	}

	// Calling functions to start the game //
	setGame();
	updateNumber();
	crystalValues();
	renderScore();

	// Clicking on crystals //
	$(document).on("click",".diamond", function() {
		console.log($(this).attr("data-imagevalue"));
		var dataVal=$(this).attr("data-imagevalue");
		var temp = parseInt(dataVal);
		
		score+=temp;
		console.log(score);
		$("#score").text(score);

	
	// Function to get and render score from crystal values //
	
	// function score () {
	// 	$("#score") = crystals.points;
	// 	$("#crystals").change(function() {
	// 		crystals.each(function() {
	// 			score = score + parseInt($(this).val());
	// 		})
	// 		$("#score").text(score);
	// 	})
		
	// 	}
	

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