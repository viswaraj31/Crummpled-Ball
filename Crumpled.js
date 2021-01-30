class Crummpled{
    constructor(x,y,radius){
        var options={
            'density':2,
            'friction':1.0,
            'restitution':0,
            
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        pop();
    }

}