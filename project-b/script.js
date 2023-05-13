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
let horrorAreas = [];


function preload() {
  img = loadImage("assets/black.jpg");
  img_note = loadImage("assets/note.jpg");
  img_floor = loadImage("assets/floor.jpg");
  img_sit = loadImage("assets/sit.jpg");
  img_cabinet = loadImage("assets/cabinet.jpg");
  img_table = loadImage("assets/table.jpg");
  img_treasure = loadImage("assets/treasure.jpg");
  img_wall = loadImage("assets/wall.jpg");
  img_window = loadImage("assets/window.jpg");
  img_clown = loadImage("assets/clown.jpg")

  cinzel = loadFont('assets/cinzel.ttf');

  sound_heart = loadSound("assets/heart.mp3");
  sound_breath = loadSound("assets/breath.mp3");
  sound_clock = loadSound("assets/clock.mp3");

  sound_clue = loadSound("assets/clue.mp3");
  sound_break = loadSound("assets/break.mp3");


  sound_lock = loadSound("assets/lock.m4a");
  sound_chain = loadSound("assets/chain.m4a");
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

  sound_horror = loadSound("assets/horror.mp3");
  sound_horror.setVolume(0.2);
}

function setup() {
  let cnv = createCanvas(1400, 787.5);
  cnv.parent("canvasContainer");
  background(52, 52, 52);
  //backgroundMusic();
  noCursor();

  balcony = new SoundRectArea(150, 370, 170, 230, sound_chain, sound_chain, sound_chain, [
    "It looks like a window. Maybe I can get\nout through it!",
    "It is fastened by a chain..",
    "You need a hammer to break the chain.."
  ], [], img_window, 55, 230, 240, 320);
  soundAreas.push(balcony);

  armoire = new SoundRectArea(800, 400, 150, 100, sound_armoire_open, sound_clue, sound_door_open, [
    "It's a cabinet! Try to open it ?",
    "There's a key in it!",
    "You have already opened it.."
  ], [], img_cabinet, 670, 130, 300, 400);
  soundAreas.push(armoire);

  pic = new SoundRectArea(1110, 180, 110, 150, sound_door_open, sound_door_open, sound_clue, [
    "A photo? Maybe\ntake a closer\nlook?",
    "Is it a house..? The\nphoto which the\nowner of this\nhouse used to\nlooked at?",
    "There's a small\nhammer behind\nthe photo frame!"
  ], [], img_wall, 875, 68, 510, 400);
  soundAreas.push(pic);

  pic1 = new SoundRectArea(990, 170, 100, 95, sound_door_open, sound_door_open, sound_door_open, [
    "A photo? Maybe\ntake a closer\nlook?",
    "It looks like a\nstream..?",
    "It looks like a\nstream..?"
  ], [], img_wall, 875, 68, 510, 400);
  soundAreas.push(pic1);

  box = new SoundRectArea(1130, 600, 250, 150, sound_lock, sound_lock, sound_lock, [
    "It's a treasure box!",
    "It's locked!",
    "You need a key to open it!"
  ], [], img_treasure, 1050, 530, 200, 200);
  soundAreas.push(box);

  box2 = new SoundRectArea(600, 430, 120, 40, sound_lock, sound_lock, sound_lock, [
    "You find a box!",
    "It's locked!",
    "You need a needle to remove the lock!"
  ], [], img_table, 420, 170, 350, 500);
  soundAreas.push(box2);

  book = new SoundRectArea(580, 300, 140, 180, sound_book, sound_book, sound_clue, [
    "It's a book!",
    "There seems to be something in this book..",
    "There's a needle in it!"
  ], [], img_table, 420, 170, 350, 500);
  soundAreas.push(book);

  book1 = new SoundRectArea(350, 580, 150, 100, sound_book, sound_book, sound_book, [
    "It's a book!",
    "There doesn't seem to be anything in\nthe book...",
    "There doesn't seem to be anything in\nthe book..."
  ], [], img_sit, 100, 520, 350, 350);
  soundAreas.push(book1);

  paper = new SoundNote(770, 700, 150, 100, sound_paper, sound_paper, sound_clue, [
    "It's a note!",
    "There seems to be\nsomething written on\nthis piece of paper..",
    "'Nov. 16th:\n\n        I've noticed that\nmy father has been\nobsessing over a\nphotograph lately. It\nseems to be a house. I \nonder what\nfascinated him so\nmuch...'"
  ], [img_note], img_floor, 500, 490, 500, 300);
  soundAreas.push(paper);

  paper1 = new SoundNote(570, 650, 150, 80, sound_paper, sound_paper, sound_clue, [
    "It's a note!",
    "There seems to be\nsomething written on\nthis piece of paper..",
    "'Jan. 12:\n\n          I'm obsessed with a\nbook recently. I really\nlove how the author\nnarrate the story...'"
  ], [img_note], img_floor, 500, 490, 500, 300);
  soundAreas.push(paper1);

  paper2 = new SoundNote(650, 500, 200, 80, sound_paper, sound_paper, sound_clue, [
    "It's a note!",
    "There seems to be\nsomething written on\nthis piece of paper..",
    "'Dec. 19th:\n\n        We had a treasure\nhunt today! It was\nso much fun! I found\na watch! I hid it in a\ntreasure box. Haha...'"
  ], [img_note], img_table, 420, 170, 350, 500);
  soundAreas.push(paper2);

  horror_1 = new horror(800, 130, 250, 150, sound_horror, img_clown, 0, 0, windowWidth, windowHeight);
  horrorAreas.push(horror_1)

  //backgroundMusic();
}

function draw() {
  background(0);
  push();
  image(img, 0, 0, 1400, 787.5);
  imageMode(CENTER);
  pop();

  noFill();
  strokeWeight(1);
  stroke(255);
  rect(width / 2 - 700, height / 2 - 393.75, 1400, 787.5);
  //rect(20, 20, windowWidth - 40, windowHeight - 40);

  /*bedroom*/
  //rect(200, 450, 280, 200);

  /*studyroom*/
  //rect(80, 80, 250, 150);

  /*bathroom*/
  //rect(380, 80, 120, 100);


  //balcony.checkMouse();
  //balcony.display();

  if (pic.count >= 25) {
    pic.count = 0;
    balcony.count = 0;
    balcony.txt = [
      "You break the chain! Click again to escape!",
      "You successfully escaped from the house!"
    ];
    balcony.sound1 = sound_break;

    pic.txt = [
      "You have searched\nit before."
    ]
  }
  if (book.count >= 25) {
    book.count = 0;
    box2.count = 0;
    box2.txt = [
      "You opened the box! There's a scroll inside it!",
      "You have already opened it..."
    ]
    box2.sound1 = sound_clue;
    box2.sound2 = sound_door_open;
    box2.sound3 = sound_door_open;
    book.txt = [
      "You have searched it before."
    ]
  }
  if (armoire.count >= 25) {
    armoire.count = 0;
    box.count = 0;
    box.txt = [
      "You opened the treasure box! There's a watch in it!",
      "You have already opened it..."
    ]
    box.sound1 = sound_clue;
    box.sound2 = sound_door_open;
    box.sound3 = sound_door_open;
    armoire.txt = [
      "You have searched it before."
    ]
  }

  for (let i = 0; i < soundAreas.length; i++) {
    let sa = soundAreas[i];
    sa.checkMouse();
    sa.displayText();
    sa.displayArea();
    sa.displaySound();
  }

  for (let i = 0; i < horrorAreas.length; i++) {
    let ha = horrorAreas[i];
    ha.checkMouse();
    ha.displayImage();
    ha.displayArea();
  }

  backgroundMusic();

  // mouse pointer
  push();
  noFill();
  stroke(255, 0, 0);
  circle(mouseX, mouseY, 20);
  circle(mouseX, mouseY, 25);
  line(mouseX + 10, mouseY + 10, mouseX + 20, mouseY + 20);
  pop();

  //link
  //window.open("http://127.0.0.1:5500/page1.html", "");
}

function backgroundMusic() {
  if (sound_clock.isPlaying()) {
    sound_heart.stop();
    sound_breath.stop();
  } else {
    if (random() < 0.003) {
      // at 0.5% chance
      sound_clock.setVolume(0.1);
      sound_clock.play();
    }
  }

  if (sound_heart.isPlaying()) {
    sound_clock.stop();
    sound_breath.stop();
  } else {
    if (random() < 0.03) {
      // at 0.5% chance
      sound_heart.setVolume(0.5);
      sound_heart.play();
    }
  }

  if (sound_breath.isPlaying()) {
    sound_heart.stop();
    sound_clock.stop();
  } else {
    if (random() < 0.03) {
      // at 0.5% chance
      sound_breath.setVolume(0.3);
      sound_breath.play();
    }
  }
}

// "button" interactive objects
class SoundRectArea {
  constructor(x, y, w, h, sound1, sound2, sound3, txt, img, img1, x1, y1, w1, h1) {
    this.sound1 = sound1;
    this.sound2 = sound2;
    this.sound3 = sound3;
    this.txt = txt;
    this.img = img;
    this.img1 = img1;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x1;
    this.y1 = y1;
    this.w1 = w1;
    this.h1 = h1;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.count = 0;
    this.interval = 0;
    this.interval_1 = 0;
    this.sound = 0;
  }
  checkMouse() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2
      && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
      // in
      //this.sound2.stop();
      //if (!this.sound1.isPlaying()) {
      //  this.sound1.play();
      //}
      this.r = 255;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.r = 255;
        this.g = 0;
        this.b = 0;
        this.count += 1;
        this.interval = 100;
        this.interval_1 = 20;
        //if (!this.sound1.isPlaying()) {
        // this.sound1.play();
        //}
      }
    } else {
      // out
      /*
      this.sound1.stop();
      if (!this.sound2.isPlaying()) {
        this.sound2.play();
      }
      */
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }
  displayArea() {
    push();
    translate(this.x, this.y);
    noStroke();
    //stroke(this.r, this.g, this.b);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    text(this.count, 0, 0);
    text(this.interval, 0, 20);
    text(this.interval_1, 0, 40);
    pop();
  }
  displaySound() {
    if (this.interval_1 > 0) {
      this.interval_1--;
      if (this.count <= 10) {
        this.sound2.stop();
        this.sound3.stop();
        if (!this.sound1.isPlaying()) {
          this.sound1.play();
        }
      }
      else if (this.count < 20) {
        this.sound1.stop();
        this.sound3.stop();
        if (!this.sound2.isPlaying()) {
          this.sound2.play();
        }
      }
      else if (this.count < 3000) {
        this.sound1.stop();
        this.sound2.stop();
        if (!this.sound3.isPlaying()) {
          this.sound3.play();
        }
      }
    }
  }
  displayText() {
    if (this.interval > 0) {
      this.interval--;
      // show the text
      let txtIndex = 0;
      let imgIndex = 0;
      if (this.count <= 10) {
        txtIndex = 0;
      }
      else if (this.count < 20) {
        txtIndex = 1;
      }
      else if (this.count < 3000) {
        txtIndex = 2;
      }

      push();
      fill(255);
      textSize(22);
      textFont(cinzel);
      let img = this.img[imgIndex];
      if (img != undefined) {
        image(this.img[imgIndex], width / 2.55, height / 9, 300, 400);
      }
      text(this.txt[txtIndex], width / 2.2, height / 6);
      pop();

      push();
      image(this.img1, this.x1, this.y1, this.w1, this.h1);
      pop();
    } else {
      // don't show the text
    }
  }
}

class SoundNote {
  constructor(x, y, w, h, sound1, sound2, sound3, txt, img, img1, x1, y1, w1, h1) {
    this.sound1 = sound1;
    this.sound2 = sound2;
    this.sound3 = sound3;
    this.txt = txt;
    this.img = img;
    this.img1 = img1;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x1;
    this.y1 = y1;
    this.w1 = w1;
    this.h1 = h1;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.count = 0;
    this.interval = 0;
  }
  checkMouse() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2
      && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
      // in
      //if (!this.sound1.isPlaying()) {
      //  this.sound1.play();
      //}
      this.r = 255;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.r = 255;
        this.g = 0;
        this.b = 0;
        this.count += 1;
        this.interval = 250;
        this.interval_1 = 20;
      }
    } else {
      // out
      /*
      this.sound1.stop();
      if (!this.sound2.isPlaying()) {
        this.sound2.play();
      }
      */
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }
  displayArea() {
    push();
    translate(this.x, this.y);
    noStroke();
    //stroke(this.r, this.g, this.b);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    text(this.count, 0, 0);
    text(this.interval, 0, 20);
    pop();
  }

  displaySound() {
    if (this.interval_1 > 0) {
      this.interval_1--;
      if (this.count <= 10) {
        this.sound2.stop();
        this.sound3.stop();
        if (!this.sound1.isPlaying()) {
          this.sound1.play();
        }
      }
      else if (this.count <= 20) {
        this.sound1.stop();
        this.sound2.stop();
        if (!this.sound2.isPlaying()) {
          this.sound2.play();
        }
      }
      else if (this.count < 3000) {
        this.sound1.stop();
        this.sound2.stop();
        if (!this.sound3.isPlaying()) {
          this.sound3.play();
        }
      }
    }
  }
  displayText() {
    if (this.interval > 0) {
      this.interval--;
      // show the text
      let txtIndex = 0;
      let imgIndex = 0;
      if (this.count <= 10) {
        txtIndex = 0;
        //imgIndex = 0;
      }
      else if (this.count < 20) {
        txtIndex = 1;
        //imgIndex = 1;
      }
      else if (this.count < 3000) {
        txtIndex = 2;
        //imgIndex = 2;
      }
      push();
      fill(255);
      textSize(22);
      textFont(cinzel);
      let img = this.img[imgIndex];
      if (img != undefined) {
        image(this.img[imgIndex], width / 2.2, height / 9, 300, 400);
      }
      text(this.txt[txtIndex], width / 2.1, height / 5.5);
      pop();

      push();
      image(this.img1, this.x1, this.y1, this.w1, this.h1);
      pop();
    } else {
      // don't show the text
    }
  }
}

class horror {
  constructor(x, y, w, h, sound, img, x1, y1, w1, h1) {
    this.sound = sound;
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x1;
    this.y1 = y1;
    this.w1 = w1;
    this.h1 = h1;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.interval = 0;
  }
  checkMouse() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2
      && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
      this.r = 255;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.r = 255;
        this.g = 0;
        this.b = 0;
        this.interval = 50;
        if (!this.sound.isPlaying()) {
          this.sound.play();
        }
      }
    } else {
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }
  displayArea() {
    push();
    translate(this.x, this.y);
    noStroke();
    //stroke(this.r, this.g, this.b);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
  displayImage() {
    if (this.interval > 0) {
      this.interval--;
      image(this.img, this.x1, this.y1, this.w1, this.h1);
    }
  }
}