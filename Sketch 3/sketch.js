
function setup(){
	createCanvas(720, 480);
}

function draw(){
	ellipse(width/2, height/2, 30);
}

function mouseClicked(){
	var clickdistance = dist(width/2, height/2, mouseX, mouseY);
	if(clickdistance < 15){
		fill(100);
	}
}