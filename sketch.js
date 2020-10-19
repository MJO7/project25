//const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImage

function preload()
{
  dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  //render = Render.create({ element: document.body, engine: engine, options: { width: 800, height: 700, wireframes: false } });
	//Create the Bodies Here.
   ground = new Ground(400,650,800,5)
   paper = new Paper(50,200)
   //dustbin = new Dustbin(600,580,150,150)
   dustbin1 = new Dustbin(550,610,5,60)
   dustbin2 = new Dustbin(650,610,5,60)
   dustbinobject = new Dustbin(600,600,200,150)
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //Render.run(render);
  ground.display();
   paper.display();
  dustbinobject.display();
  //dustbin.display();
  dustbin1.display();
  dustbin2.display();
  //dustbin3.display();
  drawSprites();
  keyPressed();
}
function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body , paper.body.position,{x:3,y:-20});
}


}


