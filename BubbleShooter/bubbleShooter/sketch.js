var bg,bgImg;
var gun, gunImg;
var bubble, bubbleImg

function preload(){
  
  gunImg = loadImage("assets/gun.png")

  bgImg = loadImage("assets/garden.png")

  bubbleImg = loadImage("assets/bubble.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(windowWidth-800,windowHeight-300,100,100)
  bg.addImage(bgImg)
  bg.scale = 1.1
  
  gun = createSprite(displayWidth-1250, displayHeight-300, 50, 50);
  gun.addImage(gunImg)
  gun.scale = 0.1
  gun.debug = true
  gun.setCollider("rectangle",0,0,300,300)

  bubble = createSprite(displayWidth-350, displayHeight-300, 50, 50);
  bubble.addImage(bubbleImg)
  bubble.scale = 0.1


}

function draw() {
  background(0); 




if(keyDown("UP_ARROW")||touches.length>0){
  gun.y = gun.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 gun.y = gun.y+30
}

drawSprites();

}
