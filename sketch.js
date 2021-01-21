let x = 100;
let y = 30;
let speed = 1;
let speedy = 1;
let shapeHeight = 20;
let shapeWidth = 20;
let r = 230;
let g = 0;
let b = 0;
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
    background(169,169,169);
  }
  
  function draw() {
    fill(r,g,b);
    //strokeWeight(10);
    //stroke(200,20,20);
    offsetX = offsetArrayX[indexVal];
    offsetY = offsetArrayY[indexVal];
    //ellipse(x,y,shapeHeight,shapeWidth);
    rect(x, y+offsetY, 10, 5);
    //ellipse(y,x,shapeHeight,shapeWidth);
    rect(y+offsetY, x, 10, 5);
    strokeWeight(3);
    stroke(169,169,169, 100);
    smooth();
    if(x > (canvX-(shapeWidth/2)) || x < (shapeWidth/2)) {
      speed = speed * -1;
    }
    if(y > (canvY-(shapeHeight/2)) || y < (shapeWidth/2)) {
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
    x = mouseX;
    y = mouseY;
    // prevent default
    return false;
  }

  function keyPressed() {
    if (keyCode === UP_ARROW) {
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
    else if (keyCode === DOWN_ARROW) {
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
  /*
  function mouseDragged() {
    fill(r,g,b);
    rect(mouseX, mouseY, width, height);
    if (mouseIsPressed == true) {
      r = Math.floor(Math.random() * (255 - 0) + 200);
      g = Math.floor(Math.random() * (255 - 0) + 200);
      b = Math.floor(Math.random() * (255 - 0) + 200);
    }
    return false;
  }
  */