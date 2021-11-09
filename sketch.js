var canvas;
var player,playerImage;
var villan,villanImage;
var  bground,bgImage;
function preload(){
playerImage=loadImage("Supra.png");
bgImage=loadImage('background.jpg');
villanImage=loadImage('Retak fire.png');
}




function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
player=createSprite(windowWidth/2-200,windowHeight/2);
player.addImage(playerImage);
player.scale=0.5

bground=createSprite(0,0,windowWidth,windowHeight);
bground.addImage(bgImage);
bground.scale=2.5;

villan = createSprite(windowWidth/2+400,windowHeight/2)
villan.addImage(villanImage)
villan.scale=0.5;

}

function draw() {
  background('darkBlue')

  villan.velocityY=-4;
  drawSprites();

}
