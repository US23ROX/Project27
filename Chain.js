class Chain{
    constructor(BodyA, BodyB){
        var options={
           bodyA:BodyA,
           bodyB:BodyB,
           stiffness:10,
           length:10
        }

        this.chain = Constraint.create(options)

        World.add(world,this.chain)

    }
    display(){
       push();
       var PointA = this.chain.bodyA.position
       var PointB = this.chain.bodyB.position
       strokeWeight(6);
       line(PointA.x,PointA.y,PointB.x,PointB.y)
       pop();
       




    }

    





}