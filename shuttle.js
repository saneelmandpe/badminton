class Shuttle{
    constructor(x,y){
        var options={
           isStatic : false ,
           restitution : 0.5
        }
        this.shuttle=Matter.Bodies.circle(x,y,30,options);
        Matter.World.add(world,this.shuttle);
    }
    display(){
    ellipse(this.shuttle.position.x , this.shuttle.position.y , 30 , 30);
    }
} 