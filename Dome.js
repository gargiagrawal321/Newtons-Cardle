class Dome{
    constructor(){
var options ={isStatic:true}
this.body=Bodies.rectangle(400,100,300,10,options);
this.width=300;
this.height=10;
World.add(world,this.body);
}
    display(){
        var pos=this.body.position;
        rectMode(RADIUS);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height)
        
    }
}