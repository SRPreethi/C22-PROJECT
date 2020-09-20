var speed,weight;
var car,wall;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height /2);
  wall.shapeColor = color(0,0,0)
}

function draw() {
  background("white");  
  car.velocityX = speed;

  if (car.x  - wall.x < car.width / 2 + wall.width / 2 && wall.x - car.x < car.width / 2 + wall.width / 2){
     var deformation = 0.5 * weight * speed  *  speed / 22500
     if (deformation < 100  ){
       car.shapeColor = color(0,255,0);
       car.velocityX = 0;
     }else if(deformation > 100 && deformation < 180){
       car.shapeColor = color(230,230,0)
       car.velocityX = 0;
     }else{
       car.shapeColor = color(250,0,0)
       car.velocityX = 0;
     }

  }else{
    car.shapeColor = 'grey'
  }


  drawSprites();
}