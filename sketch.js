var background1;

var world;
var physicsEngine;

var shuttle;
var court1,court2,court3,court4,court5,court6,court7,court8,Court9,Court10,court11,court12;
var player,player2;

var playerScore=0
var computerScore=0;

var gameState = "serve" ;
var badmintonImg,shuttleImg;

function preload(){
    badmintonImg = loadImage("./images/badminton1.png");
    shuttleImg = loadImage("./images/shuttlecock.png");
}


function setup(){

createCanvas(1350,500);

physicsEngine = Matter.Engine.create()
world = physicsEngine.world

shuttle = new Shuttle(100,100);
shuttle=createSprite(675,250,10,20);
shuttle.addImage("shuttle",shuttleImg);
shuttle.scale = 0.1;
shuttle.velocityX=0;

court1=createSprite(670,10,1350,10);
court1.shapeColor="white";

court2=createSprite(670,60,1350,10);
court2.shapeColor="white";

court3=createSprite(670,490,1350,10);
court3.shapeColor="white";

court4=createSprite(670,440,1350,10);
court4.shapeColor="white";

court5=createSprite(10,250,10,500);
court5.shapeColor="white";

court6=createSprite(60,250,10,1500);
court6.shapeColor="white";

court7=createSprite(1290,50,10,1350);
court7.shapeColor="white";

court8=createSprite(1340,50,10,1500);
court8.shapeColor="white";

court9=createSprite(475,200,10,1500);
court9.shapeColor="white";

court10=createSprite(875,200,10,1500);
court10.shapeColor="white";

court11=createSprite(245,250,460,10);
court11.shapeColor="white";

court12=createSprite(1105,250,465,10);
court12.shapeColor="white";

player=createSprite(125,150,75,150);
player.addImage("badminton",badmintonImg);
player.scale = 0.2;

player2=createSprite(1225,350,75,150);
player2.addImage("badminton",badmintonImg);
player2.scale = 0.2;


}
function draw(){    

    Matter.Engine.update(physicsEngine);
    background("green");

    shuttle.display();
    //court.display();
    
   /// player.display();
if(player.isTouching(shuttle)){
    shuttle.bounceOff(player);
}
if(shuttle.isTouching(player)){
    shuttle.bounceOff(player);
}

if(shuttle.isTouching(player2)){
    shuttle.bounceOff(player2);
}

if(shuttle.isTouching(court4)){
    shuttle.bounceOff(court4);
}

if(shuttle.isTouching(court2)){
    shuttle.bounceOff(court2);
}

player2.y=shuttle.y

fill("yellow")
textSize(20);
text("playerscore="+playerScore,150,50);
fill("yellow");
textSize(20);
text("computerscore="+computerScore,1050,50);

/*if(shuttle.isTouching(court2)){
    playerscore = playerscore + 1;
}
if(shuttle.isTouching(court6)){
    player2score += 1;
}*/

if(shuttle.x > 1350 || shuttle.x < 0){
    //playSound("score.mp3");
    
    if (shuttle.x < 0) {
      computerScore+=1;
    }
    else {
      playerScore+=1;
    }
      
    shuttle.x = 675;
    shuttle.y = 200;
    shuttle.velocityX = 0;
    shuttle.velocityY = 0;
    gameState = "serve";
    
    if (computerScore=== 5 || playerScore === 5){
      gameState = "over";
    }
  


for (var i = 0; i < 600; i+=20) {
    line(675,i,675,i+10);
 }
 
 if(keyDown("space") && gameState === "serve")   {
    shuttle.velocityX=4;
    shuttle.velocityY=1;
    gameState = "play";
    
}

if(gameState==="serve"){
    textSize(24)
    fill("red");
    text("Press Space to serve", 575,300);
}

if (gameState === "over"){
    text("Game Over!",700,200);
    text("Press 'R' to Restart",700,250);
}

if (keyDown("r")) {
    gameState = "serve";
    computerScore  = 0;  // computer score
    playerScore = 0;
  }
  
shuttle.display();
//controlShuttle();

drawSprites();
    //console.log(shuttle.position.x);
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setVelocity(player.body,{
x:3,
y:3
        })
        Matter.Body.applyForce(shuttle.body,shuttle.body.position,{
            x : 300,
            y : 100
        });//TODO applyForce not working
    }
    if(keyCode===38){
        controlPlayer('down');
       // console.log("a is pressed");//ascii value of a is 61
    }
    if(keyCode===40){
        controlPlayer('up');
       // console.log("s is pressed");//ascii value of s is 73
    }
    if(keyCode===37){
        //console.log("w is pressed");//ascii value of w is 77
        controlPlayer('right');
    }
    if(keyCode===39){
        //console.log("d is pressed");//ascii value of d is 64
        controlPlayer('left');
    }
   
}
function controlPlayer(choise){
    switch(choise){
        case 'left':{
            console.log("going left");
            player.velocityX=2;
            break
        }
        case 'right':{
            console.log("going right");
            player.velocityX=-2;
            break
        }
        case 'up':{
            console.log("going up");
            player.velocityY=2;
            break
        }
        case 'down':{
            console.log("going down");
            player.velocityY=-2;
            break
        }
    }
}

/*function controlShuttle(){
    if(keyDown("space") && gameState === "serve")   {
        shuttle.velocityX=4;
        shuttle.velocityY=1;
        gameState = "play";
        
    }
}
*/
