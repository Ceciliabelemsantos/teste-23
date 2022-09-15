
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle1=60;
var angle2=60;
var angle3=60;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	

    var plane_options = {
		isStatc:true
	  }

	  var rotator_options = {
		isStatc:true
	  }

	  var particle_options = {
		restitution:0.4
		//friction:0.02   está dizendo que está dando problema
	  }

    plane = Bodies.rectangle(400,400,20,plane_options)
	//fill("black")   não sei onde colocar
    World.add(world,plane);

	block1 = Bodies.rectangle(100,200,20,plane_options)
    World.add(world,block1);

	block2 = Bodies.rectangle(300,200,20,plane_options)
    World.add(world,block2);

	rotator1 = Bodies.rectangle(250,200,20,rotator_options)
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(250,200,20,rotator_options)
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,20,rotator_options)
	World.add(world,rotator3);

	particle1 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle1);

	particle2 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle2);

	particle3 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle3);

	particle4 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle4);

	particle5 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle5);


	Engine.run(engine);
  
	rectMode(RADIUS);
	ellipseMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  Engine.update(engine);

  ellipse(block1.position.x,block1.position.y,20);
  ellipse(block2.position.x,block2.position.y,20);
  ellipse(plane.position.x,plane.position.y,20);

  ellipse(particle1.position.x,particle1.position.y,20);
  ellipse(particle2.position.x,particle2.position.y,20);
  ellipse(particle3.position.x,particle3.position.y,20);
  ellipse(particle4.position.x,particle4.position.y,20);
  ellipse(particle4.position.x,particle5.position.y,20);

 // rect(plane.position.x,plane.position.y,650,20)         não sei como usar

  Matter.Body.rotate(rotator1,angle1)
  push()
  translate(rotator1.position.x,rotator1.position.y)
  rotate(angle1)
  rect(0,0,150,20)
  pop();
  angle1 +=0.2

  Matter.Body.rotate(rotator2,angle2)
  push()
  translate(rotator2.position.x,rotator2.position.y)
  rotate(angle2)
  rect(0,0,150,20)
  pop();
  angle1 +=0.4

  Matter.Body.rotate(rotator3,angle3)
  push()
  translate(rotator3.position.x,rotator3.position.y)
  rotate(angle3)
  rect(0,0,150,20)
  pop();
  angle1 +=0.6
  
  drawSprites();
 
}



