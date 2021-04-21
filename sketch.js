//Declaring the CONSTANTS
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Declaring the VARIABLES
var shero;
var ground;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block12,block14;
var block15,block16,block17,block18,block19,block20, block21;
var block22,block23,block24,block25,block26,block27,block28;
var block29,block30,block31,block32,block33,block34, block35;
var block36,block37,block38,block39,block40,block41,block42;
var monster;
var chain;

function setup() {
  createCanvas(1600, 800);
  engine=Engine.create();
  world=engine.world;
  shero=new SuperHero(300,400,300,200);
  ground=new Ground(400,600,1400,20);
  block1=new Block1(580,570,40,40);
  block2=new Block1(620,570,40,40);
  block3=new Block1(660,570,40,40);
  block4=new Block1(700,570,40,40);
  block5=new Block1(740,570,40,40);
  block6=new Block1(780,570,40,40);
  block7=new Block1(820,570,40,40);
  block8=new Block2(580,530,40,40);
  block9=new Block2(620,530,40,40);
  block10=new Block2(660,530,40,40);
  block11=new Block2(700,530,40,40);
  block12=new Block2(740,530,40,40);
  block13=new Block2(780,530,40,40);
  block14=new Block2(820,530,40,40);
  block15=new Block3(580,490,40,40);
  block16=new Block3(620,490,40,40);
  block17=new Block3(660,490,40,40);
  block18=new Block3(700,490,40,40);
  block19=new Block3(740,490,40,40);
  block20=new Block3(780,490,40,40);
  block21=new Block3(820,490,40,40);
  block22=new Block1(580,450,40,40);
  block23=new Block1(620,450,40,40);
  block24=new Block1(660,450,40,40);
  block25=new Block1(700,450,40,40);
  block26=new Block1(740,450,40,40);
  block27=new Block1(780,450,40,40);
  block28=new Block1(820,450,40,40);
  block29=new Block2(580,410,40,40);
  block30=new Block2(620,410,40,40);
  block31=new Block2(660,410,40,40);
  block32=new Block2(700,410,40,40);
  block33=new Block2(740,410,40,40);
  block34=new Block2(780,410,40,40);
  block35=new Block2(820,410,40,40);
  block36=new Block3(580,410,40,40);
  block37=new Block3(620,410,40,40);
  block38=new Block3(660,410,40,40);
  block39=new Block3(700,410,40,40);
  block40=new Block3(740,410,40,40);
  block41=new Block3(780,410,40,40);
  block42=new Block3(820,410,40,40);
  block43=new Block1(580,370,40,40);
  block44=new Block1(620,370,40,40);
  block45=new Block1(660,370,40,40);
  block46=new Block1(700,370,40,40);
  block47=new Block1(740,370,40,40);
  block48=new Block1(780,370,40,40);
  block49=new Block1(820,370,40,40);
  monster=new Monster(1000,570,200,200);
  chain=new Chain(shero.body,{x:250,y:250});
}

function draw() {
  background(0);
  Engine.update(engine);
  shero.display();
  ground.display();
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
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  monster.display();
  chain.display();
}

function mouseDragged(){
  Matter.Body.setPosition(shero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

