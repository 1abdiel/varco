var sea, ship;
var sealmg,shipmlg;

function preload(){
sealmg=loadImage("sea.png");
shiplmg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea =createSprite(400,200);
  sea.addImage(sealmg)
  sea.scale=0.3,
  

  ship=createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shiplmg);
  ship.scale=0.25;

}

function draw() {
  background(0);
  if(sea.x<0){
    Sea.x=sea.width/2;
}
 sea.velocityX=-3;

drawSprites();

}