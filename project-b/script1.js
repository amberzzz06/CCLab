let img;

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

let soundAreas = [];

function preload() {
    img = loadImage("assets/night.jpg");

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

    balcony = new SoundRectArea(700, 300, 20, 400, sound_balcony_open, sound_balcony_close);
    soundAreas.push(balcony);

    armoire = new SoundRectArea(280, 600, 100, 30, sound_armoire_open, sound_armoire_close);
    soundAreas.push(armoire);

    door = new SoundRectArea(400, 450, 35, 8, sound_door_open, sound_door_close);
    soundAreas.push(door);

    door1 = new SoundRectArea(160, 230, 35, 8, sound_door_open, sound_door_close);
    soundAreas.push(door1);

    desk = new SoundRectArea(250, 510, 40, 60, sound_desk_open, sound_desk_close);
    soundAreas.push(desk);

    desk1 = new SoundRectArea(260, 130, 60, 40, sound_desk_open, sound_desk_close);
    soundAreas.push(desk1);

}

function draw() {
    background(0);
    push();
    //imageMode(CENTER);
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

    if (desk.checkMouseClick()) {
        // image1_visible = true;
        // setTimeout(fnName, 1000); 
    }
    /*
    if (desk.checkMouseClick()) {
      fill(255, 0, 0);
      rect(100, 100, 500, 200);
    }
    */
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
            this.b = 0;
            if (mouseIsPressed) {
                this.r = 255;
                this.g = 220;
                this.b = 0;
                if (!this.sound1.isPlaying()) {
                    this.sound1.play();
                }
                return true;
            }
        } else {
            this.r = 142;
            this.g = 114;
            this.b = 66;
            return false;
        }
    }
    display() {
        push();
        translate(this.x, this.y);
        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}