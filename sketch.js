const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var divisions=[];
var particles=[];
var plinkos=[];

var divisionHeight=300;



function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  for(var i=0;i<=width;i=i+80)
  {
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var i=40;i<=width;i=i+50)
  {
    plinkos.push(new Plinko(i,130));
  }

  for(var i=15;i<=width-10;i=i+50)
  {
    plinkos.push(new Plinko(i,230));
  }

  for(var i=40;i<=width;i=i+50)
  {
    plinkos.push(new Plinko(i,330));
  }

  for(var i=15;i<=width-10;i=i+50)
  {
    plinkos.push(new Plinko(i,440));
  }

  

 

  ground=new Ground(240,800,480,10)
 

  Engine.run(engine);
}

function draw() {
  background("red");

  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  

  for(var i=0;i<divisions.length;i++)
  {
  divisions[i].display();
  }


  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  
  ground.display();
 
  drawSprites();
}