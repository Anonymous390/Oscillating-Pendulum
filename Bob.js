class Bob{
    constructor(x,y,radius){
        var options = {
            friction: 0.4,
            density: 0.4,
            restitution: 0.8
        }

        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        push();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        fill(255);
        ellipse(0,0,this.radius);
        pop();
    }
}