const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Bridge(10,{x:width/2,y:height/2.5});
  b1=new Ball(width/2,30,15)
  b2=new Ball(width/2,30,15)
  b3=new Ball(width/2,30,15)
  b4=new Ball(width/2,30,15)
  b5=new Ball(width/2,30,15)
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show()
  b1.show()
  b2.show()
  b3.show()
  b4.show()
  b5.show()
}
