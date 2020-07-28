var bubble,bubbleImg;
var player,playerImg;

var bubbles = [];
var hitPoint = 0;
var life = 3

function preload(){
  bubbleImg = loadImage("bubble.png");
  playerImg = loadImage("player.png");

}
function setup() {
  createCanvas(400,400);
  player = new Player();
  lazer = new Lazer(player.player.x,player.player.y,10,10);
  
  for(var i = 0 ;i<5;i++) {
    var  r = random();
    var  r1 = random();
    bubble = new Bubble(r*400,r1*400);
    bubbles.push(bubble);
  }
}
function draw() {
  textSize(20);
  fill("red")
  background("blue");  
  player.move();
  for(var i  = 0;i<5;i++){
    
    
    if(bubbles[i].bubble.isMoving == false){
      var ran = Math.round(random()*100);
      var dirX,dirY;
      

      if(ran%2 === 0 ){
        dirX = 1
      }
      else {dirX = -1;}

      var ran = Math.round(random()*100);
      if(ran%2 === 0 ){
        dirY = 1
      }
      else {dirY = -1;}

        bubbles[i].setDirection(dirX,dirY);

      }
     bubbles[i].movebubble();
    //  console.log(dirY);
    //  console.log(dirX);
    // if(player.isTouching(bubbles[i])){
    //   player.fill()
    // }
    if(bubbles[i].bubble.x<0 || bubbles[i].bubble.x>400 || bubbles[i].bubble.y<0 || bubbles[i].bubble.y>400){
      var ranX = Math.round(random()*400);
      var ranY = Math.round(random()*400);
      bubbles[i].bubble.x = ranX;
      bubbles[i].bubble.y = ranY;
    }
    if(bubbles[i].bubble.y<0 || bubbles[i].bubble.y>400){
      var ranX = Math.round(random()*400);
      var ranY = Math.round(random()*400);
      bubbles[i].bubble.x = ranX;
      bubbles[i].bubble.y = ranY;
    }
    if(lazer.lazer.isTouching(bubbles[i].bubble)){
      console.log("hit");
      bubbles[i].bubble.destroy();
      hitPoint += 1;
        }
        if(hitPoint === 5){
          text("YOU WIN",200,200);
        }
        if(player.player.isTouching(bubbles[i].bubble)){
          // text("GAME OVER",200,200);
          life += -1;
        }
        if(life === 0){
          text("GAME OVER")
        }

  }


 if(keyWentDown(32)){
  if(lazer.lazer.isMoving === false){
    lazer.trigger();
  lazer.lazer.x = player.player.x
  lazer.lazer.y = player.player.y
  }
  

  }  
                          
lazer.shoot();

  
  
 
  text("Score :"+hitPoint,20,20 )
  text("Life : "+life,20,380);
  drawSprites();

}