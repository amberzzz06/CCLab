let sound_o_do;
let sound_c_do;
let doors = [];

let sound_o_de;
let sound_c_de;
let desks = [];

let sound_o_am;
let sound_c_am;
let armoire;

let sound_o_bal;
let sound_c_bal;
let balcony;

function preload() {
  sound_o_do = loadSound("assets/door-open.m4a");
  sound_c_do = loadSound("assets/door-close.m4a");

  sound_o_de = loadSound("assets/desk-open.m4a");
  sound_c_de = loadSound("assets/armoire-close.m4a");

  sound_o_am = loadSound("assets/armoire-open.m4a");
  sound_c_am = loadSound("assets/armoire-close.m4a");

  sound_o_bal = loadSound("assets/balcony-open.m4a");
  sound_c_bal = loadSound("assets/balcony-close.m4a");
}

function setup() {
  createCanvas(800, 500);
  background(52, 52, 52);
  doors.push(new Door(60, 130));
  desks.push(new Desk(220, 300));
  armoire = new Armoire(50, 20);
  balcony = new Balcony(300, 200);
}

function draw() {
  noFill();
  strokeWeight(1);
  stroke(255);
  rect(20, 20, 760, 460);
  rect(50, 30, 150, 100);
  rect(200, 250, 280, 200);
  rect(250, 30, 70, 100);

  for (let i = 0; i < doors.length; i++) {
    let o = doors[i];
    o.checkMouse();
    o.display();
  }

  for (let i = 0; i < desks.length; i++) {
    let d = desks[i];
    d.checkMouse();
    d.display();
  }

  armoire.chechMouse();
  armoire.display();

  balcony.chechMouse();
  balcony.display();
}

// "button" interactive objects
class Door {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xDia = 40;
    this.yDia = 8;
    this.r = 142;
    this.g = 114;
    this.b = 66;
  }
  checkMouse() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.xDia) {
      if (mouseIsPressed) {
        sound_o_do.play();
      }
    } else {
      this.c = 0;
      this.xDia = 40;
      this.yDia = 8;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.r, this.g, this.b);
    rect(0, 0, this.xDia, this.yDia);
    pop();
  }
}

class Desk {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xDia = 40;
    this.yDia = 50;
    this.r = 142;
    this.g = 114;
    this.b = 66;
  }
  checkMouse() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.xDia) {
      if (mouseIsPressed) {
        this.xDia = 50;
        this.yDia = 60;
        sound_o_de.play();
      }
    } else {
      this.xDia = 40;
      this.yDia = 50;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.r, this.g, this.b);
    rect(0, 0, this.xDia, this.yDia);
    pop();
  }
}

class Armoire {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xDia = 40;
    this.yDia = 30;
    this.c = 0;
  }
  checkMouse() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.xDia) {
      this.c = 255;
      if (mouseIsPressed) {
        this.xDia = 50;
        this.yDia = 40;
        sound_o_am.play();
      }
    } else {
      this.c = 0;
      this.xDia = 40;
      this.yDia = 30;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(this.c);
    rect(0, 0, this.xDia, this.yDia);
    pop();
  }
}

class Balcony {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xDia = 40;
    this.yDia = 30;
    this.c = 0;
  }
  checkMouse() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.xDia) {
      this.c = 255;
      if (mouseIsPressed) {
        this.xDia = 50;
        this.yDia = 40;
        sound_o_bal.play();
      }
    } else {
      this.c = 0;
      this.xDia = 40;
      this.yDia = 30;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(this.c);
    rect(0, 0, this.xDia, this.yDia);
    pop();
  }
}