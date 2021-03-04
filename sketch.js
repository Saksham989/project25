const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body
var engine, world;
var paper1
var ground1
var dustbin1

function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    paper1 = new paper(200,200,50);
    ground1 = new ground(600,height,1200,20);
    dustbin1 = new dustbin(790,340,10,70);
    dustbin2 = new dustbin(710,340,10,70);
    dustbin3 = new dustbin(750,350,70,10);
}

function draw(){
    background("white");
    Engine.update(engine);
    paper1.display();
    ground1.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position, {
            x:130,
            y:-145,
        })
    }
}