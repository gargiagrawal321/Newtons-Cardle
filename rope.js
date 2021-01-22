class Rope{
    constructor(bodyA,bodyB,xOffset){
var options ={bodyA:bodyA,
    bodyB:bodyB,
    poitB:{x:xOffset,y:0}
}
this.rope=Constraint.create(options);
this.xOffset=xOffset;
World.add(world,this.rope);
}
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
       stroke("green");
       strokeWeight(3);
       line(pointA.x,pointA.y,pointB.x + this.xOffset,pointB.y)
    }
}



