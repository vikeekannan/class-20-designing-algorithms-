var rectangleFix
var rectanglemove
function setup() {
  createCanvas(800,400);
  rectangleFix=createSprite(400, 200, 100, 50);
  rectanglemove=createSprite(300,100,50,100);
  rectangleFix.shapeColor="green" ;
  rectanglemove.shapeColor="green";
  rectangleFix.debug="true";
  rectanglemove.debug="true";
}

function draw() {
  background(255,255,255);  
  console.log("moved" + rectanglemove.y);
  console.log("fixed" + rectangleFix.y)
  rectanglemove.x=World.mouseX;
  rectanglemove.y=World.mouseY;
  if(rectanglemove.x - rectangleFix.x < rectangleFix.width/2 + rectanglemove.width/2 && 
    rectanglemove.y - rectangleFix.y < rectangleFix.width/2 + rectanglemove.width/2 && 
    rectangleFix.y - rectanglemove.y < rectangleFix.width/2 + rectanglemove.width/2 &&
    rectangleFix.x - rectanglemove.x < rectangleFix.width/2 + rectanglemove.width/2){
    rectangleFix.shapeColor="red" ;
    rectanglemove.shapeColor="red"; 
  }
  else{
    rectangleFix.shapeColor="green" ;
    rectanglemove.shapeColor="green";
  }
  drawSprites();
}