# FA205- Recycle 2040


## Overview 
Here's the project [link] (https://climedu.github.io/FA205-Recycle-2040/)

This is an interactive project that allows users to make their own decisions based on the situation in Jakarta, Indonesia, related to clean water sanitation. 

### Progress 1 - Searching on SDG problem
Recycle 2040 is an artwork that represents the current world’s problems. According to UNSDG number 6, "Clean Water & Sanitation” ensures access to water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need for health and well-being (United Nations, 2018). As I am an Indonesian, and I want to make something related to my background, I searched about the issues in Indonesia, and one of them is clean water sanitation in Jakarta, the capital city of Indonesia, which is bad and undrinkable (Teoman, 2024). 

Tons of waste from factories along the shores of the rivers that flow through the metropolis are dumped directly into the waters, in addition to raw domestic waste from millions of homes that end up in the city's waterways (Sonda, International, n.d.). Dumping waste into rivers can cause the water to become turbid and odorous. To resolve that, Jakarta needs to learn how to properly manage waste, such as separating recyclable from non-recyclable waste. Regular river cleaning is essential to restore cleanliness after being polluted by waste (Smart City Jakarta, 2024).

Knowing there’s a water pollution issue in my own country motivated me to create this project, wanting to let others know more about situations happening in Indonesia.  This project is based on factory pollution, water quality that is shown by the river, and recycling. Starting by making concepts, creating an image collection, making the art with the collage art style, and finally coding it while asking for feedback. There was some layering of images, with the if-else conditionals to create buttons that create interactivity with the users and allow users to get their own outcomes depending on their choice. 

https://www.un.org/sustainabledevelopment/water-and-sanitation/#:~:text=Goal%206%3A%20Ensure%20access%20to%20water%20and%20sanitation%20for%20all&text=Access%20to%20safe%20water%2C%20sanitation,in%202030%20unless%20progress%20quadruples.

https://www.eco-business.com/opinion/jakarta-is-a-thirsty-metropolis-without-drinkable-water/

https://smartcity.jakarta.go.id/en/blog/tips-sederhana-jaga-sungai-di-jakarta/

### Progress 2 - Making the images and context based on the problem research
Started by imaging the outcomes would be, which is aiming for the collage art style, and looking for inspirations.

<img width="400" alt="Screenshot 2025-02-18 at 6 01 58 PM" src="https://github.com/user-attachments/assets/b31b3ee0-bd26-42eb-8f2e-c5ba04d63d3e" />


Gathering these images from these sources : 

<img width="800" alt="Screenshot 2025-02-18 at 3 56 42 PM" src="https://github.com/user-attachments/assets/2d4815bb-8468-45ec-ba20-8e665b23c0c6" />

After editing on Photoshop and Canva, here's the result and separated components : 

![1](https://github.com/user-attachments/assets/220e5da8-16ba-4750-890c-53bf03e6bd21)
![2](https://github.com/user-attachments/assets/b808079a-6b87-4053-92f3-f29974ae4abf)
![3](https://github.com/user-attachments/assets/67622250-a1f5-4404-9cfc-cb07173b6a70)
![4](https://github.com/user-attachments/assets/c55d55bd-0aae-44cf-8692-9003c197c6bb)
![road](https://github.com/user-attachments/assets/62429461-087d-4dcf-929a-8aeb448eb5e6)
![return](https://github.com/user-attachments/assets/65c3053a-400d-4156-96c0-438fef334786)
![recycleover](https://github.com/user-attachments/assets/e9b2d5d5-f9b2-47ab-94c8-f78ad5bf3aa6)
![pollutionover](https://github.com/user-attachments/assets/5168dde5-a436-4355-a754-234a079e11d8)
![overlay](https://github.com/user-attachments/assets/8db01552-69d4-4fab-8f1c-5fab439fdbcf)
![arrowr](https://github.com/user-attachments/assets/a5a16acb-9644-4d0a-aee3-44379e92d8f7)
![arrowl](https://github.com/user-attachments/assets/6f6d885e-91d4-47a9-a3a2-b80c630810ec)
![trash](https://github.com/user-attachments/assets/71820375-1875-4dfc-81b6-20fa284938bc)

### Progress 3
Starting by putting the general concept of the movement home> clicked right> go to recycle, else if home> clicked left > go to polluted


```ruby
let images = [];
let currentImageIndex = 0; // 0 = Home, 1 = Recycle, 2 = Pollution, 3 = Recycle result, 4 = Pollution result
let buttonX = 380, buttonY = 455, buttonW = 95, buttonH = 150;
let buttonXl = 170, buttonYl = 495, buttonWl = 95, buttonHl = 150;

function preload() {
  images[0] = loadImage('pics/1.png'); // Home
  images[1] = loadImage('pics/2.png'); // Recycle
  images[2] = loadImage('pics/3.png'); // Pollution
  images[3] = loadImage('pics/4.png'); // Recycle result
  images[4] = loadImage('pics/5.png'); // Pollution result
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(images[currentImageIndex], 0, 0);
  

  // Only show the clickable area in the "home" scene
  if (currentImageIndex === 0) {
    drawInvisibleButtonright(buttonX, buttonY, buttonW, buttonH);
    drawInvisibleButtonleft(buttonXl, buttonYl, buttonWl, buttonHl);

  }
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

function mousePressed() {
  // If the invisible button is clicked in the "home" scene, switch to "recycle"
  if (currentImageIndex === 0 && isMouseInside(buttonX, buttonY, buttonW, buttonH)) {
    currentImageIndex = 1; // Change to recycle scene
  }else if (currentImageIndex === 0 && isMouseInside(buttonXl, buttonYl, buttonWl, buttonHl)) {
    currentImageIndex = 2; // Change to pollution scene
  }
}

function isMouseInside(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function isMouseInsideLeft(xl, yl, wl, hl) {
  return mouseXl > xl && mouseXl < xl + wl && mouseYl > yl && mouseYl < yl + hl;
}
```
<img width="800" alt="Screenshot 2025-02-18 at 12 31 19 PM" src="https://github.com/user-attachments/assets/901e8fbe-f5c8-41c8-a5a5-7cc9de94c9ff" />

### Progress 4
Continuing the structure by adding images 4 and 5, then the structure will go back go home. Moreover, I add waiting for 5 seconds features to go to the result. In the next steps, I'll add the trash movement

```ruby
let images = [];
let currentImageIndex = 0; // 0 = Home, 1 = Recycle, 2 = Pollution, 3 = Recycle result, 4 = Pollution result
let buttonX = 380, buttonY = 455, buttonW = 95, buttonH = 150;
let buttonXl = 170, buttonYl = 495, buttonWl = 95, buttonHl = 150;
let buttonXr = 550, buttonYr = 700, buttonWr = 220, buttonHr= 50;

function preload() {
  images[0] = loadImage('pics/1.png'); // Home
  images[1] = loadImage('pics/2.png'); // Recycle
  images[2] = loadImage('pics/3.png'); // Pollution
  images[3] = loadImage('pics/4.png'); // Recycle result
  images[4] = loadImage('pics/5.png'); // Pollution result
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(images[currentImageIndex], 0, 0);
  

  // Only show the clickable area in the "home" scene
  if (currentImageIndex === 0) {
    drawInvisibleButtonright(buttonX, buttonY, buttonW, buttonH);
    drawInvisibleButtonleft(buttonXl, buttonYl, buttonWl, buttonHl);

  }else if (currentImageIndex === 3 || currentImageIndex ===4) {
    drawInvisibleButtonreturn(buttonXr, buttonYr, buttonWr, buttonHr);
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

function mousePressed() {
  // If the invisible button is clicked in the "home" scene, switch to "recycle"
  if (currentImageIndex === 0 && isMouseInside(buttonX, buttonY, buttonW, buttonH)) {
    currentImageIndex = 1; // Change to recycle scene
    
    // **Wait 5 seconds, then change to Recycle Result scene**
    setTimeout(() => {
      if (currentImageIndex === 1) {
        currentImageIndex = 3;
      }
    }, 5000);

  }else if (currentImageIndex === 0 && isMouseInsideLeft(buttonXl, buttonYl, buttonWl, buttonHl)) {
    currentImageIndex = 2; // Change to pollution scene
   
    // **Wait 5 seconds, then change to Pollution Result scene**
    setTimeout(() => {
      if (currentImageIndex === 2) {
        currentImageIndex = 4;
      }
    }, 5000);

  }else if (currentImageIndex === 3 || currentImageIndex === 4 && isMouseInsideReturn(buttonXr, buttonYr, buttonWr, buttonHr) ) {
    currentImageIndex = 0; // Change to home scene
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

```

<img width="400" alt="Screenshot 2025-02-18 at 1 17 24 PM" src="https://github.com/user-attachments/assets/451a04a2-dd5c-47ed-aeb9-45edd5b78311" />


<img width="400" alt="Screenshot 2025-02-18 at 1 16 57 PM" src="https://github.com/user-attachments/assets/6c065105-5e5b-4a67-b422-9fc7d2acb644" />

### Progress 5 - Adding more structure on invisible button on image 1 and 2
If on recycle scene, the left button clicked, go to the poluted scene, and vice versa. Then after 5 second, the results come out
```ruby

let images = [];
let currentImageIndex = 0; // 0 = Home, 1 = Recycle, 2 = Pollution, 3 = Recycle result, 4 = Pollution result
let buttonX = 380, buttonY = 455, buttonW = 95, buttonH = 150;
let buttonXl = 170, buttonYl = 495, buttonWl = 95, buttonHl = 150;
let buttonXr = 550, buttonYr = 700, buttonWr = 220, buttonHr= 50;

let timeoutID = null;

function preload() {
  images[0] = loadImage('pics/1.png'); // Home
  images[1] = loadImage('pics/2.png'); // Recycle
  images[2] = loadImage('pics/3.png'); // Pollution
  images[3] = loadImage('pics/4.png'); // Recycle result
  images[4] = loadImage('pics/5.png'); // Pollution result
  overlay = loadImage('pics/overlay.png'); // Overlay image
  road = loadImage('pics/road.png'); //Road image
  arrowl= loadImage('pics/arrowl.png'); //Arrow left image
  arrowr= loadImage('pics/arrowr.png'); //Arrow right image
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(images[currentImageIndex], 0, 0);
  
  // Add overlay on Recycle and Pollution scenes
  if (currentImageIndex === 1) {
    image(road,0,0); // display road image
    image(overlay, 0, 0); // Display overlay on top of the main image
    drawInvisibleButtonleft(buttonXl, buttonYl, buttonWl, buttonHl);

  } else if ( currentImageIndex === 2) {
    image(road,0,0); // display road image
    image(overlay, 0, 0); // Display overlay on top of the main image
    drawInvisibleButtonright(buttonX, buttonY, buttonW, buttonH);
  }

  // Only show the clickable area in the "home" scene
  if (currentImageIndex === 0) {
    drawInvisibleButtonright(buttonX, buttonY, buttonW, buttonH);
    drawInvisibleButtonleft(buttonXl, buttonYl, buttonWl, buttonHl);

  }else if (currentImageIndex === 3 || currentImageIndex ===4) {
    drawInvisibleButtonreturn(buttonXr, buttonYr, buttonWr, buttonHr);
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
  }, 5000);
}

function mousePressed() {
  if (currentImageIndex === 0 && isMouseInside(buttonX, buttonY, buttonW, buttonH)) {
    currentImageIndex = 1;
    resetTimer();
  } else if (currentImageIndex === 0 && isMouseInsideLeft(buttonXl, buttonYl, buttonWl, buttonHl)) {
    currentImageIndex = 2;
    resetTimer();
  } else if (currentImageIndex === 1 && isMouseInsideLeft(buttonXl, buttonYl, buttonWl, buttonHl)) {
    currentImageIndex = 2;
    resetTimer();
  } else if (currentImageIndex === 2 && isMouseInside(buttonX, buttonY, buttonW, buttonH)) {
    currentImageIndex = 1;
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

```
### Progress 6, adding the trash movement
Starting by putting the boundaries with that quad shapes
```ruby

let images = [];
let currentImageIndex = 0; // 0 = Home, 1 = Recycle, 2 = Pollution, 3 = Recycle result, 4 = Pollution result
let buttonX = 380, buttonY = 455, buttonW = 95, buttonH = 150;
let buttonXl = 170, buttonYl = 495, buttonWl = 95, buttonHl = 150;
let buttonXr = 550, buttonYr = 700, buttonWr = 220, buttonHr= 50;

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
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(images[currentImageIndex], 0, 0);
  
  // Add overlay on Recycle and Pollution scenes
  if (currentImageIndex === 1) {
    image(road,0,0); // display road image
    image(overlay, 0, 0); // Display overlay on top of the main image
    image(recycleover, 0,0); // Display recycle overlay arrow
    image(trash, 400, 400);
    fill(255,0,0);
    quad(400,400, 550, 400, 780, 800, 500, 800);
    drawInvisibleButtonleft(buttonXl, buttonYl, buttonWl, buttonHl);


  } else if ( currentImageIndex === 2) {
    image(road,0,0); // display road image
    image(overlay, 0, 0); // Display overlay on top of the main image
    image(pollutionover, 0,0); // Display pollution overlay arrow
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
  }, 5000);
}

function mousePressed() {
  if (currentImageIndex === 0 && isMouseInside(buttonX, buttonY, buttonW, buttonH)) {
    currentImageIndex = 1;
    resetTimer();
  } else if (currentImageIndex === 0 && isMouseInsideLeft(buttonXl, buttonYl, buttonWl, buttonHl)) {
    currentImageIndex = 2;
    resetTimer();
  } else if (currentImageIndex === 1 && isMouseInsideLeft(buttonXl, buttonYl, buttonWl, buttonHl)) {
    currentImageIndex = 2;
    resetTimer();
  } else if (currentImageIndex === 2 && isMouseInside(buttonX, buttonY, buttonW, buttonH)) {
    currentImageIndex = 1;
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

```

<img width="800" alt="Screenshot 2025-02-18 at 3 10 48 PM" src="https://github.com/user-attachments/assets/883ba0be-d6c5-4127-b2b6-4b20eff22514" />

### Progress 7 - Removing the guideline, and fixing bug
Adding function to resetting the walkers and removing the quad

```ruby
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
}

function setup() {
  createCanvas(800, 800);
  startWalkerTimer();
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
```
<img width="800" alt="Screenshot 2025-02-18 at 3 52 36 PM" src="https://github.com/user-attachments/assets/3fa40d28-33de-4f93-a546-524e354f93f1" />

## Commentary
- Overall, this projects was more about the research of the concerning issues, and ways to communicating it as an artwork
- It's my first time using a lot of layers and help me practice to decide what comes first, and practicing more in if else conditionals to move from scene to scene
