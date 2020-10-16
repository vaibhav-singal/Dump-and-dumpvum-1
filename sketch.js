var ground , paper;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1500);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,600,2000,20);
  paper = new Paper(100,590,10);
  dustbin = new Dustbin(1200,580);
  
  
	
 
	//Create the Bodies Here.


	
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  
  ground.display();
  paper.display();
  dustbin.display();
  
  
  
 
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-85});
  }
}