function setup() {
  createCanvas(800, 500);
  background(0);
}

function draw() {
  background(0, 5);
  let x = random(width);
  let y = random(height);
  let dia = random(3, 15);

  noFill();
  stroke(255);
  circle(x, y, dia);
}