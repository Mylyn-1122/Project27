
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roofObject = new roof(280, 200, 200, 20)

	bobObject1 = new bob(200, 600, 20);
	bobObject2 = new bob(240, 600, 20);
	bobObject3 = new bob(280, 600, 20);
	bobObject4 = new bob(320, 600, 20);
	bobObject5 = new bob(360, 600, 20);

	rope1 = new rope(bobObject1.body, roofObject.body, -80, 0)
	rope2 = new rope(bobObject2.body, roofObject.body, -40, 0)
	rope3 = new rope(bobObject3.body, roofObject.body, 0, 0)
	rope4 = new rope(bobObject4.body, roofObject.body, 40, 0)
	rope5 = new rope(bobObject5.body, roofObject.body, 80, 0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  //console.log(bobObject1.body);

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		
		Matter.Body.setVelocity(bobObject1.body, {x: -20, y: -20});
	  }
}

