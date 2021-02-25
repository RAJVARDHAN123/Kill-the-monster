class Box{

    constructor(x, y){

      var option ={
        'restitution':0.8,
        'friction':1.0,
        'density':1.5
      }

      this.body = Bodies.rectangle(x, y, 60, 60, option);
      this.size = 60;
      World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    stroke("black")
    strokeWeight(10)
    rect( 0, 0, this.size , this.size);
    pop();

    }

}