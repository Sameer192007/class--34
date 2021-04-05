class Ball {
    constructor(x,y){
      //this.image = loadImage("sprites/bird.png");
      //this.smokeImage = loadImage("sprites/smoke.png");
      //this.trajectory =[];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        
      }
    }
  }
  