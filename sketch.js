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
//let offsetVal = 10;
let upordown;
let indexVal = 0;
let frameVal = 60;

function setup() {
    if (windowHeight > windowWidth) {
      canvX = windowWidth;
      canvY = windowWidth;
    }
    else if (windowWidth > windowHeight) {
      canvX = windowHeight;
      canvY = windowHeight;
    }
    cnv = createCanvas(canvX, canvY);
    reposX = (windowWidth - canvX) / 2;
    reposY = (windowHeight - canvY) / 2;
    cnv.position(reposX,reposY);
    background(204,153,44);
  }
  
  function draw() {
    frameRate(frameVal);
    /*
    let offsetArrayY = new Array(2 * offsetVal);
    let offsetArrayX = new Array(2 * offsetVal);
    for (i = 0; i < offsetVal; i++) {
      offsetArrayY[i] = offsetVal * -1 + i;
      offsetArrayX[i] = offsetVal - i;
    }
    */
    offsetX = offsetArrayX[indexVal];
    offsetY = offsetArrayY[indexVal];
    fill(216,201,170);
    strokeWeight(3);
    stroke(216,201,170, 150);
    //ellipse(x,y,shapeHeight,shapeWidth);
    smooth();
    rect(x, y+offsetY, shapeWidth, shapeHeight);

    fill(157,33,25);
    strokeWeight(3);
    stroke(157,33,25, 150);
    smooth();
    //ellipse(y,x,shapeHeight,shapeWidth);
    rect(y+offsetY, x, shapeWidth, shapeHeight);
    if(x > (canvX-(shapeWidth/2)) || x < (shapeWidth/2)) {
      speed = speed * -1;
    }
    if(y > (canvY-(shapeHeight/2)) || y < (shapeHeight/2)) {
      speedy = speedy * -1;
    }
    x = x + speed;
    y = y + speedy;

    if (indexVal == 0) {
      upordown = 1;
    }
    else if (indexVal == 20) {
      upordown = -1;
    }
    indexVal = indexVal + upordown;

  }

  function mouseClicked() {
    if (mouseX > 0 && mouseX < canvX && mouseY > 0 && mouseY < canvY) {
        x = mouseX;
        y = mouseY;
    }
    // prevent default
    return false;
  }

  function keyPressed() {
    /*
    if (keyCode == UP_ARROW) {
        if (frameVal + 10 < 250) {
          frameVal = frameVal + 10;
        }
    }
    else if (keyCode == DOWN_ARROW) {
        if (frameVal - 10 > 30) {
            frameVal = frameVal - 10;
        }
    }
    */
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
    }
  }
