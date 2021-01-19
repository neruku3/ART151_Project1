let x = 50;
let y = 30;
let speed = 5;
let speedy = 10;
rectH = 50;
rectW = 25;
r = 255;
g = 0;
b = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(169,169,169);
  }
  
  function draw() {
    //fill(r,g,b,20);
    /*strokeWeight(20);
    stroke(200,20,20,10);*/
    /*if(x > (windowWidth-(rectW/2)) || x < (rectW/2)) {
      speed = speed * -1;
    }
    if(y > (windowHeight-(rectH/2)) || y < (rectW/2)) {
      speedy = speedy * -1;
    }
    x = x + speed;
    y = y + speedy;
    */
  }

  function mouseDragged() {
    fill(r,g,b);
    rect(mouseX, mouseY, rectW, rectH);
    if (mouseIsPressed == true) {
      r = Math.floor(Math.random() * (255 - 0) + 0);
      g = Math.floor(Math.random() * (255 - 0) + 0);
      b = Math.floor(Math.random() * (255 - 0) + 0);
    }
    return false;
  }