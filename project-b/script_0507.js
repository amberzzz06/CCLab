let img;
let cinzel;
//let sound_lock;

//let sound_o_do;
//let sound_c_do;
let pics = [];

//let sound_o_de;
//let sound_c_de;
let boxs = [];

//let sound_o_am;
//let sound_c_am;
let armoire;

//let sound_o_bal;
//let sound_c_bal;
let balcony;

let book;
let paper;

let soundAreas = [];


function preload() {
  img = loadImage("assets/black.jpg");
  cinzel = loadFont('assets/cinzel.ttf');

  sound_heart = loadSound("assets/heart.mp3");
  sound_breath = loadSound("assets/breath.mp3");
  sound_clock = loadSound("assets/clock.mp3");


  sound_lock = loadSound("assets/lock.m4a");
  sound_book = loadSound("assets/book.m4a");
  sound_paper = loadSound("assets/paper.m4a");

  sound_door_open = loadSound("assets/door-open.m4a");
  sound_door_close = loadSound("assets/door-close.m4a");

  sound_desk_open = loadSound("assets/desk-open.m4a");
  sound_desk_close = loadSound("assets/armoire-close.m4a");

  sound_armoire_open = loadSound("assets/armoire-open.m4a");
  sound_armoire_close = loadSound("assets/armoire-close.m4a");

  sound_balcony_open = loadSound("assets/balcony-open.m4a");
  sound_balcony_close = loadSound("assets/balcony-close.m4a");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("canvasContainer");
  background(52, 52, 52);
  //backgroundMusic();

  balcony = new SoundRectAreaLock(190, 440, 100, 170, sound_lock, sound_balcony_open);
  soundAreas.push(balcony);

  armoire = new SoundRectAreaKey(880, 470, 60, 40, sound_armoire_open, sound_armoire_close);
  soundAreas.push(armoire);

  pic = new SoundRectArea(1200, 220, 90, 130, sound_door_open, sound_door_open);
  soundAreas.push(pic);

  pic1 = new SoundRectArea(1070, 185, 75, 65, sound_door_open, sound_door_open);
  soundAreas.push(pic1);

  box = new SoundRectAreaLock(1220, 650, 80, 60, sound_lock, sound_desk_open);
  soundAreas.push(box);

  box2 = new SoundRectAreaLock(650, 470, 50, 40, sound_lock, sound_desk_open);
  soundAreas.push(box2);

  book = new SoundRectArea(650, 400, 50, 40, sound_book, sound_desk_open);
  soundAreas.push(book);

  book1 = new SoundRectArea(380, 620, 50, 40, sound_book, sound_desk_open);
  soundAreas.push(book1);

  paper = new SoundRectArea(800, 780, 50, 40, sound_paper, sound_desk_open);
  soundAreas.push(paper);

  paper1 = new SoundRectArea(635, 720, 60, 30, sound_paper, sound_desk_open);
  soundAreas.push(paper1);

  paper2 = new SoundRectArea(660, 530, 60, 20, sound_paper, sound_desk_open);
  soundAreas.push(paper2);

  backgroundMusic();
  open()
}

function draw() {
  background(0);
  push();
  image(img, 0, 0, windowWidth, windowHeight);
  pop();

  noFill();
  strokeWeight(1);
  stroke(255);
  //rect(20, 20, windowWidth - 40, windowHeight - 40);

  /*bedroom*/
  //rect(200, 450, 280, 200);

  /*studyroom*/
  //rect(80, 80, 250, 150);

  /*bathroom*/
  //rect(380, 80, 120, 100);


  //balcony.checkMouse();
  //balcony.display();

  for (let i = 0; i < soundAreas.length; i++) {
    let sa = soundAreas[i];
    //sa.checkMouseOver();
    sa.checkMouseClick();
    sa.display();
  }
  //if (frameCount >= 10) {
  //  backgroundMusic();
  //}



  //if (desk.checkMouseClick()) {
  // image1_visible = true;
  // setTimeout(fnName, 1000); 
  //}
  /*
  if (desk.checkMouseClick()) {
    fill(255, 0, 0);
    rect(100, 100, 500, 200);
  }
  */
}

function backgroundMusic() {
  sound_clock.play();
  sound_clock.setVolume(0.1);
  //sound_clock.loop();
}

// "button" interactive objects
class SoundCircleArea {
  constructor(x, y, dia, sound1, sound2) {
    this.sound1 = sound1;
    this.sound2 = sound2;
    this.x = x;
    this.y = y;
    this.dia = dia;
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouseOver() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.dia / 2) {
      // in
      this.sound2.stop();
      if (!this.sound1.isPlaying()) {
        this.sound1.play();
      }
    } else {
      // out
      /*
      this.sound1.stop();
      if (!this.sound2.isPlaying()) {
        this.sound2.play();
      }
      */
    }
  }
  checkMouseClick() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.dia / 2) {
      this.r = 255;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.r = 255;
        this.g = 220;
        this.b = 0;
        if (!this.sound1.isPlaying()) {
          this.sound1.play();
        }
      }
    } else {
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    stroke(this.r, this.g, this.b);
    noFill();
    circle(0, 0, this.dia);
    pop();
  }
}

class SoundRectArea {
  constructor(x, y, w, h, sound1, sound2) {
    this.sound1 = sound1;
    this.sound2 = sound2;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouseOver() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2
      && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
      // in
      this.sound2.stop();
      if (!this.sound1.isPlaying()) {
        this.sound1.play();
      }
    } else {
    }
  }
  checkMouseClick() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2
      && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
      this.r = 255;
      this.g = 255;
      this.b = 255;
      if (mouseIsPressed) {
        this.r = 41;
        this.g = 34;
        this.b = 34;
        if (!this.sound1.isPlaying()) {
          this.sound1.play();
        }
      }
    } else {
      noFill();
      noStroke();
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    stroke(this.r, this.g, this.b);
    //noFill();
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}



class SoundRectAreaLock {
  constructor(x, y, w, h, sound1, sound2) {
    this.sound1 = sound1;
    this.sound2 = sound2;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouseOver() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2
      && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
      // in
      this.sound2.stop();
      if (!this.sound1.isPlaying()) {
        this.sound1.play();
      }
    } else {
      // out
      /*
      this.sound1.stop();
      if (!this.sound2.isPlaying()) {
        this.sound2.play();
      }
      */
    }
  }
  checkMouseClick() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2
      && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
      this.r = 255;
      this.g = 255;
      this.b = 255;
      if (mouseIsPressed) {
        this.r = 41;
        this.g = 34;
        this.b = 34;
        if (!this.sound1.isPlaying()) {
          this.sound1.play();
        }
        lock();
      }
    } else {
      noFill();
      noStroke();
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    stroke(this.r, this.g, this.b);
    //noFill();
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

class SoundRectAreaKey {
  constructor(x, y, w, h, sound1, sound2) {
    this.sound1 = sound1;
    this.sound2 = sound2;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouseOver() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2
      && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
      this.sound2.stop();
      if (!this.sound1.isPlaying()) {
        this.sound1.play();
      }
    } else {
    }
  }
  checkMouseClick() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2
      && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
      this.r = 255;
      this.g = 255;
      this.b = 255;
      if (mouseIsPressed) {
        this.r = 41;
        this.g = 34;
        this.b = 34;
        if (!this.sound1.isPlaying()) {
          this.sound1.play();
        }
        lock1();
      }
    } else {
      noFill();
      noStroke();
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    stroke(this.r, this.g, this.b);
    //noFill();
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

function lock() {
  push();
  //fill(0);
  //rect(50, 50, 100, 100);
  fill(255);
  textSize(32);
  textFont(cinzel);
  text('It is locked!', width / 2, height / 2);
  pop();
}

function lock1() {
  push();
  //fill(0);
  //rect(50, 50, 100, 100);
  fill(255);
  textSize(32);
  textFont(cinzel);
  text('You find a key!', width / 2, height / 2);
  pop();
}