let images = [];
let currentImageIndex = 0; // 0 = Home, 1 = Recycle, 2 = Pollution, 3 = Recycle result, 4 = Pollution result
let buttonX = 380, buttonY = 455, buttonW = 95, buttonH = 150;
let buttonXl = 170, buttonYl = 495, buttonWl = 95, buttonHl = 150;
let buttonXr = 550, buttonYr = 700, buttonWr = 220, buttonHr= 50;

let walkers = [];
let walkerCount = 0; // Counter for how many walkers have appeared
let maxWalkers = 5;
let walkers2 = []
let walkerCount2 = 0; // Counter for how many walkers have appeared
let maxWalkers2 = 5;
let walkerfish = [];

let timeoutID = null;

function preload() {
  images[0] = loadImage('pics/1.png'); // Home
  images[1] = loadImage('pics/2.png'); // Recycle
  images[2] = loadImage('pics/3.png'); // Pollution
  images[3] = loadImage('pics/4.png'); // Recycle result
  images[4] = loadImage('pics/5.png'); // Pollution result
  overlay = loadImage('pics/overlay.png'); // Overlay image
  recycleover = loadImage('pics/recycleover.png'); // Recycle overlay arrow
  pollutionover = loadImage('pics/pollutionover.png'); // Pollution overlay arrow
  road = loadImage('pics/road.png'); //Road image
  arrowl= loadImage('pics/arrowl.png'); //Arrow left image
  arrowr= loadImage('pics/arrowr.png'); //Arrow right image
  returnbutton = loadImage('pics/return.png'); // return button image
  trash = loadImage('pics/trash.png'); //trash image
  fish = loadImage('pics/fish.png'); // fish image
}

function setup() {
  createCanvas(800, 800);
  startWalkerTimer();
  for (let i = 0; i < 8; i++) {
    let x = random(0,100);
    let y = random(600,800);
    walkerfish[i] = new WalkerFish(x, y); // Use 'walkers' instead of 'walker'
  }
}

function startWalkerTimer() {
  let interval = setInterval(() => {
    if (walkerCount < maxWalkers) {
      let x = 400;
      let y = 400;
      walkers.push(new Walker(x, y));
      walkerCount++;
    } else {
      clearInterval(interval); // Stop adding walkers after 5 have appeared
    }
  }, 1000); // Adds one walker every 1 second
}

function startWalkerTimer2() {
  let interval = setInterval(() => {
    if (walkerCount2 < maxWalkers2) {
      let x = 250;
      let y = 400;
      walkers2.push(new Walker2(x, y));
      walkerCount2++;
    } else {
      clearInterval(interval); // Stop adding walkers after 5 have appeared
    }
  }, 1000); // Adds one walker every 1 second
}

function draw() {
  background(220);
  image(images[currentImageIndex], 0, 0);
  
  // Add overlay on Recycle and Pollution scenes
  if (currentImageIndex === 1) {

    image(road,0,0);

  
    for (let i = 0; i < walkerCount; i++) {
      walkers[i].step();
      walkers[i].show();
    }
    image(overlay, 0, 0);
    image(recycleover, 0, 0);
    drawInvisibleButtonleft(buttonXl, buttonYl, buttonWl, buttonHl);


  } else if ( currentImageIndex === 2) {
    image(road,0,0); // display road image



    for (let i = 0; i < walkers2.length; i++) {
      walkers2[i].step();
      walkers2[i].show();
    }

    image(overlay, 0, 0); // Display overlay on top of the main image
    image(pollutionover, 0,0); // Display pollution overlay arrow
    for (let i = 0; i < walkerfish.length; i++) {
      walkerfish[i].step();
      walkerfish[i].show();
    }
    drawInvisibleButtonright(buttonX, buttonY, buttonW, buttonH);
  }


if (currentImageIndex === 3 || currentImageIndex === 4) {
  drawInvisibleButtonreturn(buttonXr, buttonYr, buttonWr, buttonHr);
  image(returnbutton,0,0);
}



if (( currentImageIndex === 0 ) && isMouseInsideLeft(buttonXl, buttonYl, buttonWl, buttonHl)){
  image(arrowl, 0,0); // Display left arrow
} else if (( currentImageIndex === 0 ) && isMouseInside(buttonX, buttonY, buttonW, buttonH)) {
  image(arrowr, 0,0); // Display right arrow
}

if (( currentImageIndex === 1 ) && isMouseInsideLeft(buttonXl, buttonYl, buttonWl, buttonHl)){
  image(pollutionover, 0,0); // Display recycle overlay arrow
  image(arrowl, 0,0); // Display left arrow
}

if (( currentImageIndex === 2 ) && isMouseInside(buttonX, buttonY, buttonW, buttonH)){
  image(recycleover, 0,0); // Display recycle overlay arrow
  image(arrowr, 0,0); // Display left arrow
}

}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  step() {
    this.x += random(1,2);
    this.y += random(1,2);
  
    // make it not going out of the canvas
    this.x = constrain(this.x, 0, width - 20);
    this.y = constrain(this.y, 0, height - 20);
  }

  show() {
    image(trash, this.x, this.y, 800, 800);
  }
}

//for going to the left (trash)
class Walker2 {
  constructor(x, y) { // Use x, y (not x2, y2) for consistency
    this.x = x;
    this.y = y;
  }

  step() {
    this.x += random(-1, -2);
    this.y += random(1, 2);

    // Make sure it stays within bounds
    this.x = constrain(this.x, 0, width - 20);
    this.y = constrain(this.y, 0, height - 20);
  }

  show() {
    image(trash, this.x, this.y, 800, 800); // Adjust the size if needed
  }
}

//for fish moving
class WalkerFish {
  constructor(x, y) { // Use x, y (not x2, y2) for consistency
    this.x = x;
    this.y = y;
  }

  step() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);

    // Make sure it stays within bounds
    this.x = constrain(this.x, 0, width - 30);
    this.y = constrain(this.y, 0, height - 30);
  }

  show() {
    image(fish, this.x, this.y, 80, 80); // Adjust the size if needed
  }
}

function drawInvisibleButtonreturn(xr, yr, wr, hr) {
  noFill(); // Make it invisible
  noStroke(); // Remove the outline
  rect(xr, yr, wr, hr);
}

function drawInvisibleButtonleft(xl, yl, wl, hl) {
  noFill(); // Make it invisible
  noStroke(); // Remove the outline
  rect(xl, yl, wl, hl);
}

function drawInvisibleButtonright(x, y, w, h) {
  noFill(); // Make it invisible
  noStroke(); // Remove the outline
  rect(x, y, w, h);
}

function resetTimer() {
  if (timeoutID) {
    clearTimeout(timeoutID);
  }

  timeoutID = setTimeout(() => {
    if (currentImageIndex === 1) {
      currentImageIndex = 3; // Recycle -> Recycle result
    } else if (currentImageIndex === 2) {
      currentImageIndex = 4; // Pollution -> Pollution result
    }
  }, 7500); // after 7500 ml seconds
}

function mousePressed() {
  if (currentImageIndex === 0 && isMouseInside(buttonX, buttonY, buttonW, buttonH)) {
    currentImageIndex = 1;
    walkerCount = 0;
    walkers = [];  // Clear existing walkers before starting new ones
    startWalkerTimer();
    resetTimer();
  } else if (currentImageIndex === 0 && isMouseInsideLeft(buttonXl, buttonYl, buttonWl, buttonHl)) {
    currentImageIndex = 2;
    walkerCount2 = 0;
    walkers2 = []; // Clear existing walkers before starting new ones
    startWalkerTimer2();
    resetTimer();
  } else if (currentImageIndex === 1 && isMouseInsideLeft(buttonXl, buttonYl, buttonWl, buttonHl)) {
    currentImageIndex = 2;
    walkerCount2 = 0;
    walkers2 = []; // Clear existing walkers before starting new ones
    startWalkerTimer2(); // Ensure new walkers appear
    resetTimer();
  } else if (currentImageIndex === 2 && isMouseInside(buttonX, buttonY, buttonW, buttonH)) {
    currentImageIndex = 1;
    walkerCount = 0;   // Reset walker count
    walkers = [];      // Clear walkers
    startWalkerTimer(); // Restart the walker spawning
    resetTimer();
  } else if ((currentImageIndex === 3 || currentImageIndex === 4) && isMouseInsideReturn(buttonXr, buttonYr, buttonWr, buttonHr)) {
    currentImageIndex = 0;
  }
}

function isMouseInside(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function isMouseInsideLeft(xl, yl, wl, hl) {
  return mouseX > xl && mouseX < xl + wl && mouseY > yl && mouseY < yl + hl;
}

function isMouseInsideReturn(xr, yr, wr, hr) {
  return mouseX > xr && mouseX < xr + wr && mouseY > yr && mouseY < yr + hr;
}
