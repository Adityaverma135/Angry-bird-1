const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);
    
    bird = new Bird(width/2-600,height/2+175);

    slingshot = new SlingShot(ground.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    ground.display();

    bird.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
        slingshot.attach();
    }
}