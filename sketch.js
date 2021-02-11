var bullet,wall;
var speed,weight,thickness;

//thickness=random(22,83)

function setup() {
  createCanvas(1600,400)+bullet;
  //createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,100,20);
  bullet.shapecolor="blue";

  
  wall=createSprite(1200,350,thickness,height/2);
  wall.shapecolor=color(80,80,80);
  wall.thickness=83;
  wall.height=500;
}

function draw() {
  background(255,255,255);
  bullet.velocityX=speed;
  
  colour();
  
  //console.log(wall.x-car.x);
  drawSprites();
}
function collided(o1,o2){
  o1RightEdge=o1.x+o1.width;
  o2LeftEdge=o2.x;
  if(o1RightEdge>=o2LeftEdge){
    return true;
  }
  else{
    return false;
  }
}

function colour(){
  if(collided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapecolor="red";
    }

    if(damage<10){
      wall.shapecolor="green";
    }
  }

}