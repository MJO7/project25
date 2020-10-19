class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      }
      this.body = Bodies.circle(x, y,50 ,options);
      this.width = 130;
      this.height = 130;
      this.image = loadImage("crumpledpaper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image,0,0,this.width,this.height)
      pop();
    }
    
  };
  