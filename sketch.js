const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, edges;
var gameState = "start" 

function preload()
{
rocketdown = loadImage('rocketdown.png')
rocketleft = loadImage('rocketleft.png')
rocketright = loadImage('rocketright.png')
rocketup = loadImage('rocketupimage.png')
bgimg = loadImage('bgimg.jpeg')
openingpicture = loadImage('opening picture.png') 
brick = loadImage('brick.png')
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//creating the sprites
	
	bg = createSprite(700,300)
	bg.addImage(openingpicture)
	bg.scale = 0.2
	bg.visible = false

  player = createSprite(90,520)
  player.addImage(rocketup);
  player.scale = 0.7;

  edges = createEdgeSprites();

  
  
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  fill("white");
  text(mouseX+','+ mouseY,mouseX,mouseY);

  drawSprites();

  ///////---------------------------------------> GAMESTATE  __ START <---------------------------------------------

  if(gameState==="start"){
	
    bg.visible = true;

    fill ("white");
    stroke ("black");
    strokeWeight(5);
    textSize(20);
    text("PRESS SPACE TO PLAY ",590,440);

    if(keyCode === 32){
      gameState = "play";
    }
  }

  ///////---------------------------------------> GAMESTATE  __ PLAY <---------------------------------------------

  if(gameState==="play"){

   //background(0);

   bg.visible = false

   //THE MOUSE CURSOR
   fill("white");
   text(mouseX+','+ mouseY,mouseX,mouseY);

   //PLAYER IMAGE CHANGE
   if(keyIsDown(DOWN_ARROW)){
    player.addImage(rocketdown);
    playerMovment(0, 6)
   }

   if(keyIsDown(RIGHT_ARROW)){
    player.addImage(rocketright);
    playerMovment(6, 0)
   }

   if(keyIsDown(LEFT_ARROW)){
    player.addImage(rocketleft);
    playerMovment(-6, 0)
   }

   if(keyIsDown(UP_ARROW)){
    player.addImage(rocketup);
    playerMovment(0, -6)
   }

   //THE MAZE 
   maze();

   //wall6.velocityY = -4;
   //wall6.bounceOff(edges[2]);
   wall6 = createSprite(555,250, 10, 20);
   wall6.addImage(brick);
   wall6.velocityY = -4;

   if(wall6.y <= 22){
    wall6.velocityY = 4;
   }

   if(wall6.y >= 450){
    wall6.velocityY = -4;
   }

   /* player.collide(wall1);
   player.collide(wall2);
   player.collide(wall3);
   player.collide(wall4);
   player.collide(wall5);
   player.collide(wall6);
   player.collide(wall7);
   player.collide(wall8);
   player.collide(wall9);
   player.collide(wall10);*/
  
  }
  
  
 
}

function playerMovment(x, y){
  player.x = player.x + x;
  player.y = player.y + y;
}

function maze(){
  
  wall1 = createSprite(50, 500, 10, 300);
  wall2 = createSprite(150, 550, 10, 200);
  wall3 = createSprite(350, 450, 400, 10);
  wall4 = createSprite(250, 350, 400, 10);
  wall5 = createSprite(455,255, 10, 200);
  //the one on the right

  wall7 = createSprite(250,157,400,10); 
  wall8 = createSprite(555,112,10,100);
  wall9 = createSprite(360,60,400,10);
  wall10 = createSprite(161,40,10,50);
  wall11 = createSprite();
  wall12 = createSprite();
  wall13 = createSprite();
  wall14 = createSprite();

 /* wall1.shapeColor="red";
  wall2.shapeColor="red";
  wall3.shapeColor="red";
  wall4.shapeColor="red";
  wall5.shapeColor="red";
  wall6.shapeColor="red";
  wall7.shapeColor="red";
 

}

