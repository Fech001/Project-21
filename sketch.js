
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var barrier;
var barrier2;
var lid;
var lid2;

function preload()
{
	
}


function setup() {
	createCanvas(1500, 500);
	engine = Engine.create();
  world = engine.world;


  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var barrier_options ={
	isStatic: true
   }

	var barrier2_options ={
		isStatic: true
   }
  
   var lid_options ={
	isStatic: true
}

var lid2_options ={
	isStatic: true
}


	

	//Create the Bodies Here.

	ground = Bodies.rectangle(200,490,400,20,ground_options);
	World.add(world,ground);
  
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	
	barrier = Bodies.rectangle(1000,490,400,20,ground_options);
	World.add(world,barrier);

	barrier2 = Bodies.rectangle(1300,490,400,20,ground_options);
	World.add(world,barrier2);

	lid = Bodies.rectangle(1260,330,400,20,ground_options);
	World.add(world,barrier2);

	lid2 = Bodies.rectangle(1040,330,400,20,ground_options);
	World.add(world,barrier2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,4000,20);
  rect(barrier.position.x,barrier.position.y,20,300);
  rect(barrier2.position.x,barrier2.position.y,20,300);
  rect(lid.position.x,lid.position.y,100,20);
  rect(lid2.position.x,lid2.position.y,100,20);

}


function keyPressed() {
  if(keyCode === UP_ARROW) {

    Matter.body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {

    Matter.body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5});
  }
}



