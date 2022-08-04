var sea,ship;
var sealmg,shiplmg;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
}

function setup(){
createCanvas(400,400);
background("blue");  
sea=creatSprite(400,200);
sea.addImage(seaImg);
sea.scale=0.3;
ship = createSprite(130,200,30,30);
ship.addAnimation("movingShip",shipImg1);
ship.scale =0.25;

}

function draw() {
drawSprites();
sea.velocityX = -5;
if(sea.x < 0){
  sea.x = sea.width/2;
} 

}
