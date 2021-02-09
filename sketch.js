//Nikith Erukulla
//ART 151 Spring 2021 Project 1 Generative Drawing

let x = 100;
let y = 30;
let speed = 1;
let speedy = 1;
let shapeHeight = 5;
let shapeWidth = 10;
let canvX;
let canvY;
let reposX;
let reposY;
let offsetX;
let offsetY;
let offsetArrayY = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];
let offsetArrayX = [10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];
let upordown;
let indexVal = 0;
let frameVal = 60;
let topDist;

function setup() {
    if (windowHeight > windowWidth) {
      canvX = windowWidth;
      canvY = windowWidth;
    }
    else if (windowWidth > windowHeight) {
      canvX = windowHeight;
      canvY = windowHeight;
    }
    cnv = createCanvas(windowWidth, windowHeight);
    reposX = windowWidth/2 - canvX/2;
    reposY = (windowHeight - canvY) / 2;
    reposX = reposX - 100;
    background(204,153,44); // this is the color of the left margin
    x = reposX + 100;
    y = reposY + 30;
    fill(204,153,20,255); // this is the color of the middle drawing square
    strokeWeight(5);
    stroke(204,153,20);
    rect(reposX, reposY, canvX+10, canvY);
    fill(199,153,20); // this is the color of the right margin
    strokeWeight(5);
    stroke(199,153,20);
    rect(canvX+reposX, reposY, (windowWidth-(canvX+reposX)), windowHeight);
    filter(BLUR,4);
    alert("Click anywhere within the drawing square to change the position of the lines. Press CTRL to use Gaussian Blur. Press UP / DOWN Arrow to increase / decrease the speed and size of the drawing. Press RIGHT / LEFT arrow to increase / decrease the FPS. I wanted to keep symmetry in my piece, so I created a square in the middle which the drawing occurs on to use reflection. Additionally, I wanted the user to be able to differentiate between the foreground and background and add some depth, so I allowed them to add in a Gaussian Blur whenever they want to. I also created slight color differences between the margins and the drawing space in an attempt to add some depth.");
  }
  
  function draw() {
    frameRate(frameVal);
    offsetX = offsetArrayX[indexVal];
    offsetY = offsetArrayY[indexVal];
    fill(216,201,170);
    strokeWeight(3);
    stroke(216,201,170, 150);
    smooth();
    rect(x, y+offsetY, shapeWidth, shapeHeight);
    fill(157,33,25);
    strokeWeight(3);
    stroke(157,33,25, 150);
    smooth();
    rect((canvX+reposX)-(x-reposX), canvY-y+offsetY, shapeWidth, shapeHeight);
    if(x > ((canvX+reposX)-(shapeWidth)) || x < (reposX + (shapeWidth))) {
      speed = speed * -1;
    }
    if(y > (canvY-(shapeHeight/2)) || y < (shapeHeight/2)) {
      speedy = speedy * -1;
    }
    x = x + speed;
    y = y + speedy;

    //the code below does the offset of the lines
    if (indexVal == 0) {
      upordown = 1;
    }
    else if (indexVal == 20) {
      upordown = -1;
    }
    indexVal = indexVal + upordown;

  }

  function mouseClicked() {
    if (mouseX > reposX && mouseX < (canvX + reposX) && mouseY > reposY && mouseY < canvY) {
        x = mouseX;
        y = mouseY;
    }
    return false;
  }

  function keyPressed() {
    
    if (keyCode == RIGHT_ARROW) {
        if (frameVal + 10 < 250) {
          frameVal = frameVal + 10;
        }
    }
    else if (keyCode == LEFT_ARROW) {
        if (frameVal - 10 > 30) {
            frameVal = frameVal - 10;
        }
    }
    
    if (keyCode == UP_ARROW) {
      if (speed > 0) {
        speed = speed + 1;
      }
      else if (speed < 0) {
        speed = speed - 1;
      }
      if (speedy > 0) {
        speedy = speedy + 1;
      }
      else if (speedy < 0) {
        speedy = speedy - 1;
      }
      shapeWidth = shapeWidth + 5;
      shapeHeight = shapeWidth / 2;
    }
    else if (keyCode == DOWN_ARROW) {
      if (speed > 0 && (speed - 1) > 0) {
        speed = speed - 1;
      }
      else if (speed < 0 && (speed + 1) < 0) {
        speed = speed + 1;
      }
      if (speedy > 0 && (speedy - 1) > 0) {
        speedy = speedy - 1;
      }
      else if (speedy < 0 && (speedy + 1) < 0) {
        speedy = speedy + 1;
      }
      if ((shapeWidth-5) > 0)
      {
        shapeWidth = shapeWidth - 5;
        shapeHeight = shapeWidth / 2;
      }
    }
    else if (keyCode == CONTROL) {
      filter(BLUR, 2);
    }
  }
