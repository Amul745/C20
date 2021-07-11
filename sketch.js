var astronaut;
var sleep;
var brush;
var gym;
var eat;
var move;
var bg


function preload() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png")
  brush=loadAnimation("brush.png")
  gym=loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png")
  eat=loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png")
  bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
  move=loadAnimation("move.png","move.png","move1.png","move1.png")
}
function setup(){
astronaut=createSprite(300,230)
astronaut.addAnimation("sleeping",sleep)
astronaut.scale=0.1
}

function draw() {
  background(255,255,255);  

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
  astronaut.scale=0.1
  astronaut.y=350;
  astronaut.velocityX=0
  astronaut.velocityY=0
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym)
  astronaut.changeAnimation("gymming")
  astronaut.scale=0.1
  astronaut.y=350;
  astronaut.velocityX=0
  astronaut.velocityY=0
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
  astronaut.scale=0.1
  astronaut.y=350;
  astronaut.velocityX=0
  astronaut.velocityY=0
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath)
  astronaut.changeAnimation("bathing")
  astronaut.scale=0.1
  astronaut.y=350;
  astronaut.velocityX=0
  astronaut.velocityY=0
}


  drawSprites();
}