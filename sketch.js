
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  var ball_options = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
  }
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 groundObj.display();

}
groundObj=new ground (width/2,670,20,width, 20)
leftSide = new ground(1100, 600, 20, 120);
function keyPressed() {
if (keyCode === UP_ARROW) {

}
}



