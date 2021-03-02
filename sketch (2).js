
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bar, ball1, ball2, ball3, ball4, ball5, chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bar = createSprite(400,200,300,100,{isStatic:true});

	ball1 = new Ball(270,400,50,50);
	ball2 = new Ball(340,400,50,50);
	ball3 = new Ball(410,400,50,50);
	ball4 = new Ball(480,400,50,50);
	ball5 = new Ball(530,400,50,50);

	chain1 = new Chain(ball1.body,{x:270,y:200});
	chain2 = new Chain(ball2.body,{x:340,y:200});
	chain3 = new Chain(ball3.body,{x:410,y:200});
	chain4 = new Chain(ball4.body,{x:480,y:200});
	chain5 = new Chain(ball5.body,{x:530,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  if(keyDown("space")){
	  Matter.Body.applyForce(ball5,{x:530,y:400},{x:10,y:10});
  }

  drawSprites();
 
}



