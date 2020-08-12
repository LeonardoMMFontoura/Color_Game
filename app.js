let colors = generateRandomColors(6); 
let squares = document.querySelectorAll(".square")
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		let clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
		} else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}
 
function pickColor() {
    let random = Math.floor(Math.random() * colors.length); 
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}