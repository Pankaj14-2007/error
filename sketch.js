var form;
var targetWeight;
var gameState=0;
var fat_runner;
var fatRunner;
var road;
var roadImage;
var obstacle;
var reporterImage;
var reporter;
var burgerImages;
var burger;
var rand;
var score=100;
var obstacleGroup;
var restartButton;

function preload(){
 fat_runner=loadAnimation("images/runner1.png","images/runner2.png");
roadImage=loadImage("images/Road.png");
burgerImages=loadImage("images/burger.png");
reporterImage=loadImage("images/reporter.png");



}

function setup() {
  createCanvas(800,800);


  road=createSprite(400.400,50,50);
  road.addImage("road",roadImage)
  road.velocityY=9;

 fatRunner=createSprite(400,400,50,20);
 fatRunner.addAnimation("runner",fat_runner);
 fatRunner.scale=0.1;

 obstacleGroup=new Group()
 
 
  form=new Form();
}

function draw() {
  background(255,255,255);
  if (gameState===0) {
    form.display();
  }
    else if(gameState==1){
      if(road.y>800){
        road.y=400

      }
      text("targetWeight="+ targetWeight,300,300);

      if(keyDown("left_arrow")){
        fatRunner.x=fatRunner.x-3;
      }
     
      if(keyDown("right_arrow")){
        fatRunner.x=fatRunner.x+3;
      }
    if(fatRunner.isTouching(obstacleGroup)){
      score=score+10;
      fatRunner.scale=fatRunner.scale+0.1;
      obstacleGroup.destroyEach();

       }

     if (frameCount%1000===0) {
       score=score-1;
       
     }
     if(score===targetWeight)
      gameState=2;
      text("You won !!!",50,50);
      restart();

    }

    if(score===150){
     gameState=3;
     text("you lose .... your player stuck with his food and with people",100,100);
     restart();
    }
    

      createObstacle()
      drawSprites();
      textSize(24);
      fill('red')
      text('current weight ='+score,10,50);
      
    }
 






 function createObstacle() {
   if(frameCount%200===0){
     
      obstacle= createSprite(60,0,50,70);

      obstacle.x=Math.round(random(100,800));

      obstacle.scale=0.5;

      obstacle.velocityY=7;

      obstacle.lifetime=100;

      rand=Math.round(random(1,2));

      if(rand===1){
         obstacle.addImage(burgerImages);
      }else{
        obstacle.addImage(reporterImage);
      }
      
      obstacleGroup.add(obstacle);

   }
  


  
}

function restart() {
  restartButton.createSprite(100,100,400,400);
  if (mousePressedOver(restarrButton)) {
    gameState=0;
    score=100;
    
  }
}