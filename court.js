class Court{
    constructor(x, y, w, h){
        var options={
            "isStatic": true,
        }
        this.court = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h
        World.add(world, this.court);
    
    }
    display(){
        push();
        // USED FILL CODE FROM COLOR PICKER
        fill("white");
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
        pop();

    }

}