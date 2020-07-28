class Lazer{
    constructor(x,y,width,height){
        this.lazer = createSprite(x,y,width,height);
        this.lazer.isMoving = false;

        
    }
    trigger(){
        this.lazer.isMoving = true;
    }
   shoot(){
       
       if(this.lazer.isMoving === true){
        this.lazer.y += -6;
        if(this.lazer.y<0){
            this.lazer.isMoving = false;
        }
       }
       
       
   }
   
    }
