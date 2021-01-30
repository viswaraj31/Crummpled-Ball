
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,ball;	
var world;


function setup() {
	createCanvas(800,800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(650,650);
	ball = new Crummpled(200,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  ball.display();

}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
 }
