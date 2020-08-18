var fixedRect, movingRect;

var orangeblob, purpleblob;

function setup() {
  createCanvas(1200,800);
  orangeblob = createSprite(200, 200, 100, 100);
  purpleblob = createSprite(900, 200, 100, 100);
  orangeblob.shapeColor="orange";
  purpleblob.shapeColor="purple";
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
//  fixedRect.velocityY = +5;
}
//function 
function draw() {
  background(0,0,0);  
  bounceOff(movingRect, fixedRect);
  if (isTouching(orangeblob, purpleblob)){
    text("woo hoooooooo", 200, 200);
  }
  orangeblob.x=World.mouseX;
  orangeblob.y=World.mouseY;
  drawSprites();
}