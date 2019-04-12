var audio1 = document.getElementById("audioID");

function playAudio() {
    audio1.play();
}

var ellipseDiameter = 8;
var ellipseRandom;


function setup() {
    console.log('--setup--');
    createCanvas(windowWidth, windowHeight);
    colors = [color("#f9c987")];
}

function draw() {
  noStroke();
  ellipseRandom = random(1, ellipseDiameter);
    console.log(ellipseRandom);
    if (mouseIsPressed) {
      fill(111, 105, 131);
    } else {
      noFill();
    }
    ellipse(mouseX, mouseY, ellipseRandom, ellipseRandom);
  }


