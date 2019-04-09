var ellipseDiameter = 20;
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
      fill(37, 90, 164);
    } else {
      fill(37, 90, 164);
    }
    ellipse(mouseX, mouseY, ellipseRandom, ellipseRandom);
  }

