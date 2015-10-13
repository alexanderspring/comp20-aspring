
function init(){
var canvas = document.getElementById("game_canvas").getContext("2d");
var img = new Image();
img.src = 'duckhunt-background.gif';
var bird1 = new Image();   
bird1.src = 'duckhunt_various_sheet.png';
var bird2 = new Image();   
bird2.src = 'duckhunt_various_sheet.png';
	img.onload = function(){
		canvas.drawImage(img,0,0);
	}
	
	bird1.onload = function(){
	canvas.drawImage(bird1, 120, 120, 40, 35, 150, 75, 40, 40);
	}

	bird2.onload = function(){
	canvas.drawImage(bird2, 165, 120, 40, 35, 100, 75, 40, 40);
	}
}



