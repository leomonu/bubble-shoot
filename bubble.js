class Bubble{
    constructor(x,y){
        this.bubble = createSprite(x,y);
        this.bubble.addImage(bubbleImg);
        this.bubble.scale=  0.2;
        this.bubble.isMoving = false;
        this.bubble.dirX = 0;
        this.bubble.dirY = 0;

    }
    movebubble(){
        this.bubble.x += 3*this.bubble.dirX;
        this.bubble.y += 3*this.bubble.dirY;
        
    }
    setDirection(dirX,dirY){
        this.bubble.dirX = dirX;
        this.bubble.dirY = dirY;
        this.bubble.isMoving = true;
    }
}