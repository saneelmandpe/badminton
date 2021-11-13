class Player{
    constructor(x,y){
        var options={
           isStatic : true ,
           restitution : 0.5
        }
        this.player=Matter.Bodies.circle(x,y,30,options);
        Matter.World.add(world,this.player);
    }
    display(){
        fill("red");
    ellipse(this.player.position.x , this.player.position.y , 30 , 130);
    
    }
} 