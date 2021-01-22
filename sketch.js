const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world;
var dome;
var Ball1,Ball2,Ball3,Ball4,Ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  dome=new Dome();

  Ball1 = new Ball(300,300);
  Ball2 = new Ball(350,300);
  Ball3 = new Ball(400,300);
  Ball4 = new Ball(450,300);
  Ball5 = new Ball(500,300);
	
  rope1 = new Rope(Ball1.body,dome.body,-100);     
  rope2 = new Rope(Ball2.body,dome.body,-50);      
  rope3 = new Rope(Ball3.body,dome.body,0);        
  rope4 = new Rope(Ball4.body,dome.body,50);
  rope5 = new Rope(Ball5.body,dome.body,100);

}


function draw() {
  rectMode(CENTER);
  background(0);
  dome.display();

  Ball1.display();
  Ball2.display();
  Ball3.display();
  Ball4.display();
  Ball5.display();

     rope1.display();
     rope2.display();
     rope3.display();
     rope4.display();
     rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x:-50,y:-50})
	}
} 

