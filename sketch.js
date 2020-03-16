const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base;
var bob;
var thread;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  bob = new Bob(220,220,20);

  base = new Ground(200, 200, 20, 20);

  thread = new Chain(bob.body,base.body);

}

function draw() {
  background(51);

  Engine.update(engine);

  base.display();

  thread.display();

  bob.display();

  drawSprites();
}