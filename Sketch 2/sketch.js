var myobject = {
	foo : 0,
	bar : 1
};

console.log( myobject.foo );

function setup(){
	createCanvas(720,480);
}


function draw(){

}

function mouseClicked(){
	ellipse(mouseX, mouseY, 10);
}