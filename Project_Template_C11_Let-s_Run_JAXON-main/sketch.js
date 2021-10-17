 var pathImg , runImg
 var path , Jaxon
 var leftWall , rightWall
 


function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  runImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400)
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale = 1.2
  
  Jaxon = createSprite( 200 , 350)
  Jaxon.addAnimation("running" , runImg)
  Jaxon.scale = 0.07
  Jaxon.setCollider("rectangle" ,0,100,1500,1500)
  

  rightWall = createSprite(400,200,75,400)
  leftWall = createSprite(0,200,89,400)
  rightWall.visible = false
  leftWall.visible = false
  
}

function draw() {
  background(0);
  

  if(path.y > 400){
    path.y = 198/2
  }

  Jaxon.x = mouseX
  if(Jaxon.isTouching(leftWall)){
    Jaxon.x = 100
  }
  Jaxon.bounceOff(rightWall)
  Jaxon.bounceOff(leftWall)
  drawSprites()
}
