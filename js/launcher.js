class Launcher{
    constructor(bodyA,PointB){
    var options={
        bodyA:bodyA,
        pointB:PointB,
        stiffeness:0.004,
        length:2
    }
    this.bodyA = bodyA;
    this.pointB = PointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA != null){
            var pos1 = this.bodyA.position;
            var pos2 = this.pointB;
            strokeWeight(3);
            line(pos1.x, pos1.y, pos2.x, pos2.y);
        }
       
    }

    fly(){
        this.sling.bodyA = null;
    }
}