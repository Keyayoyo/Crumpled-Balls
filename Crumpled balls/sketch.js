var ball,ground ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	ball= new Paper (200,420,25);
	ground = new Ground(800,500,1600,20);
	base1 = new Dustbin(1300,480,200,20);
	base2 = new Dustbin(1200,440,20,100);
	base3 = new Dustbin(1400,440,20,100)
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
  ground.display();
  base1.display();
  base2.display();
  base3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-35})
	}
}



