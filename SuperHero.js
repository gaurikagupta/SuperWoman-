class SuperHero{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("superHero.png")
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    noStroke();
    noFill();
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    imageMode(CENTER);
    image(this.image,0,0,300,200);
    pop(); 
    }
};    
    
