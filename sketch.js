const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground, ball, ball2, ball3, ball4, ball5

function setup(){
  var canvas = createCanvas (500, 500);
  engine = Engine.create(); 
  world = engine.world
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(250, 490, 300, 20, ground_options);
  World.add(world, ground);
  var ball_options = {
    'restitution': 1.0
  }
  ball = Bodies.circle(150, 50, 20, ball_options)
  World.add(world, ball);

  var ball2_options = {
    'restitution': 1.0
  }
  ball2 = Bodies.circle(200, 100, 20, ball2_options)
  World.add(world, ball2);

  var ball3_options = {
    'restitution': 1.0
  }
  ball3 = Bodies.circle(250, 150, 20, ball3_options)
  World.add(world, ball3);

  var ball4_options = {
    'restitution': 1.0
  }
  ball4 = Bodies.circle(300, 200, 20, ball4_options)
  World.add(world, ball4);

  var ball5_options = {
    'restitution': 1.0
  }
  ball5 = Bodies.circle(350, 250, 20, ball5_options)
  World.add(world, ball5);

} 

function draw(){
  background("red");
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  ellipse(ball2.position.x, ball2.position.y, 20, 20);
  ellipse(ball3.position.x, ball3.position.y, 20, 20);
  ellipse(ball4.position.x, ball4.position.y, 20, 20);
  ellipse(ball5.position.x, ball5.position.y, 20, 20);
}