function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.id("p5-canvas");
    console.log(canvas);


    background(100);
}

function draw() {
    stroke(255, 80);
    line(width / 2, height / 2, mouseX, mouseY);
}