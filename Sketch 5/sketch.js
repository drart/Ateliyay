// stolen from example
// https://p5js.org/reference/#/p5.FFT
var waveform;

function preload(){
  sound = loadSound('industry_mad.wav');
}

function setup(){
  var cnv = createCanvas(720,480);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  //sound.speed(0.1);/// good idea!!!
  sound.amp(0.2);
}

function draw(){
  background(0);


  waveform = fft.waveform();
  noFill();

  beginShape();
  stroke(255,255,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    //var x = map(i, 0, waveform.length, 0, width);
    //var y = map( waveform[i], -1, 1, 0, height);
    vertex(i,waveform[i] * height + height/2);
  }
  endShape();

  text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}