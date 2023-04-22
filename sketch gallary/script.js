let size = [1, 0.8, 0.5, 0.3];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("p5-container");

}

function draw() {
  background(220);
  noStroke();
  fill("#8b9dc3");
  rect(0, 0, 600, 400);
  fill("#96ceb4");
  rect(0, 400, 600, 600);
  drawCreature(width / 2, height / 2, 0, 1.0);
}

function drawCreature(x, y, r, s) {
  push();
  translate(x, y);
  rotate(r);
  scale(s);
  drawBody(0, 0, 0, size[0]);
  drawEye(0, 0, 0, size[0]);
  drawFeet(0, 0, 0, size[0]);
  drawHorn(0, 0, 0, size[0]);
  let sinValue = sin(frameCount * 0.05);
  let angle = map(sinValue, -1, 1, 150, 210);
  drawTail(50, 100, radians(angle), size[0]);

  drawBody(200, 50, 0, size[1]);
  drawEye(200, 50, 0, size[1]);
  drawFeet(200, 50, 0, size[1]);
  //drawHorn(200, 50, 0, size[1]);
  let sinValue1 = sin(frameCount * 0.12);
  let angle1 = map(sinValue1, -1, 1, 150, 210);
  drawTail(230, 130, radians(angle1), size[1]);

  drawBody(-200, 100, 0, size[2]);
  drawEye(-200, 100, 0, size[2]);
  drawFeet(-200, 100, 0, size[2]);
  //drawHorn(-200, 100, 0, size[2]);
  let sinValue2 = sin(frameCount * 0.08);
  let angle2 = map(sinValue2, -1, 1, 150, 210);
  drawTail(-180, 150, radians(angle2), size[2]);
  pop();
}

function drawBody(x, y, r, s) {
  //body parts
  push();
  translate(x, y);
  scale(s);
  noStroke();

  fill("#2E8B57");

  rotate(160);
  rect(0, 0, 100, 30, 10);

  rotate(100);
  rect(0, 0, 90, 10, 10);

  rotate(30.1);
  rect(0, -10, 120, 40, 30);

  fill("#5a5255");
  ellipse(40, 40, 15, 25);
  rotate(-PI / 5);
  ellipse(50, 90, 15, 35);
  pop();
}

function drawEye(x, y, r, s) {
  //eyes
  push();
  translate(x, y);
  scale(s);
  noStroke();

  fill(255);
  ellipse(-35, -15, 25, 15);

  fill(0);
  circle(-35, -15, 12);
  circle(-70, -5, 7);
  rotate(-0.2);
  ellipse(-30, -35, -25, -5);
  pop();
}

function drawFeet(x, y, r, s) {
  //feet
  push();
  translate(x, y);
  scale(s);
  fill(0);
  noStroke();
  rotate(-11.4);
  triangle(40, 45, 45, 55, 50, 45);
  rotate(1);
  triangle(50, -10, 55, 0, 60, -10);
  rotate(-2.2);
  triangle(-23, 60, -17, 70, -12, 60);

  rotate(0.53);
  triangle(50, 104, 55, 119, 60, 104);
  rotate(1.4);
  triangle(100, -32, 105, -17, 110, -32);
  rotate(3.79);
  triangle(-50, 97, -55, 112, -60, 97);
  pop();
}

function drawHorn(x, y, r, s) {
  //teeth&Horns
  push();
  translate(x, y);
  rotate(r);
  scale(s);
  noStroke();
  rotate(-0.23);
  for (let x = -90; x <= -40; x += 10) {
    fill(random(255), random(255), random(255));
    triangle(x, y - 1, x + 5, y + 9, x + 10, y - 1);
  }
  rotate(100.03);
  for (let x = -90; x <= -50; x += 10) {
    fill(random(255), random(255), random(255));
    triangle(x, y - 8, x + 5, y - 18, x + 10, y - 8);
  }
  rotate(199.71);
  for (let x = -110; x <= -30; x += 20) {
    fill(random(255), random(255), random(255));
    triangle(x, y + 9, x + 10, y + 29, x + 20, y + 9);
  }
  pop();
}

function drawTail(x, y, r, s) {
  //tails
  push();
  translate(x, y);
  rotate(r);
  scale(s);
  fill(0, random(30, 100), 0);
  noStroke();
  ellipse(-50, 0, 105, 10);
  loop();
  pop();
}
