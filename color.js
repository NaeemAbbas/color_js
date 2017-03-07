 

var numsquares = 6;

 var colors = generateRandomColors(numsquares);
 var squares = document.querySelectorAll(".square");
 var pickedColor = pickcolor();
 var colorDisplay = document.getElementById("colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 var easybtn = document.querySelector("#easybtn");
 var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares = 3;
	colors = generateRandomColors(numsquares);
	pickedColor = pickcolor();	
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

});

	hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares = 6;
	colors = generateRandomColors(numsquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		
			squares[i].style.background = colors[i];
		
			squares[i].style.display = "block";
		
	}
});


 resetButton.addEventListener("click", function(){
 	colors = generateRandomColors(numsquares);
 	pickedColor = pickcolor();
 	colorDisplay.textContent = pickedColor;
 	for(var i=0; i<squares.length; i++) {
 		squares[i].style.background = colors[i];
 	}
 	h1.style.background = "#232323";
 });
 colorDisplay.textContent = pickedColor;
 for(var i=0; i<squares.length; i++) {
 	squares[i].style.background = colors[i];
 	squares[i].addEventListener("click", function(){
 	var clickedColor = this.style.background;
 		if(clickedColor === pickedColor) {
 			messageDisplay.textContent = "Correct";
 			resetButton.textContent = "play again?"

 			changeColors(clickedColor);
 			h1.style.background = clickedColor; 
 		} else {
 			this.style.background = "#232323";
 			messageDisplay.textContent = "Try again"
 		}
 	});
 }
 function changeColors(color) {
 	for(var i =0; i<squares.length; i++) {
 		squares[i].style.background = color;
 	}
 }

function pickcolor(){
 var random =	Math.floor(Math.random() * colors.length)
 return colors[random];
}
function generateRandomColors(num){

	var arr = []
 	 
 	 for(var i=0; i<num; i++) {
 	 	arr.push(randomColor())
 	 }

	return arr;

}

function randomColor() {
var r =	Math.floor(Math.random() * 256);

var g =	Math.floor(Math.random() * 256);

var b =	Math.floor(Math.random() * 256);

    return  "rgb(" +r+ ", " +g+ ", " +b+ ")";
}





 


