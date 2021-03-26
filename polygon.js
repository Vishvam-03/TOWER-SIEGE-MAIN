class Polygon{
    constructor(x, y, width, height){
    var options = {
        restitution:1,
        friction:1,
        isStatic:false

    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.height = height;
    this.width = width;
    this.image = loadImage("polygon.png")
    World.add(world, this.body);
}
    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,40,40);
        pop();
    }
}