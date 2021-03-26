const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var polygon;
var slingshot;

function preload(){
    img = loadImage("polygon.png");
}

function setup(){
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

    // Assembly of blocks
    // Fifth Row
    block1 = new Block(290, 365, 30, 40);  
    block2 = new Block(320, 365, 30, 40);
    block3 = new Block(350, 365, 30, 40);
    block4 = new Block(380, 365, 30, 40);
    block5 = new Block(410, 365, 30, 40);

    // Forth Row
    block6 = new Block(305, 325, 30, 40);
    block7 = new Block(335, 325, 30, 40);
    block8 = new Block(365, 325, 30, 40);
    block9 = new Block(395, 325, 30, 40);

    // Third Row
    block10 = new Block(320, 285, 30, 40);
    block11 = new Block(350, 285, 30, 40);
    block12 = new Block(380, 285, 30, 40);

    // Second Row
    block13 = new Block(335, 245, 30, 40);
    block14 = new Block(365, 245, 30, 40);

    // First Row
    block15 = new Block(350, 205, 30, 40);

    // Base is Static
    base = new Ground(350, 400, 400, 30);
    
    // polygon
    polygon = new Polygon(500, 250, 50, 50);
    polygon.scale = 1; 

    slingshot = new Slingshot(this.polygon,{x:150, y:160});


}

function draw(){
    background("white")
    Engine.update(engine)


    polygon.display();
    base.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    slingshot.display();


}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    polygon.fly();
  }
  
  function keyPressed(){
      if(keyCode === 32)
      {
          Matter.Body.setPosition(polygon.body,{x:235, y:420})
          chain.attach(polygon.body);
      }
  }

