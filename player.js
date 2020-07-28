class Player{
    constructor(){
        
        this.player = createSprite(200,200,20,20);
        this.player.addImage(playerImg);
        this.player.scale = 0.1;
        
        
        
    }
    move(){
        if(keyDown(UP_ARROW)){
           this.player.y += -3
        }
        if(keyDown(RIGHT_ARROW)){
            this.player.x += 3
         }
         if(keyDown(LEFT_ARROW)){
            this.player.x += -3
         }
         if(keyDown(DOWN_ARROW)){
            this.player.y += 3
         }
    }
    
}