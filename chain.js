class Chain{
	constructor(bodyA,bodyB){
		
		var options={
             bodyA:bodyA,			 
			pointB:bodyB, 
			stiffness:0.007, 
			length:1
		}
		
		this.bodyA=bodyA
		this.pointB=bodyB
		this.chain=constraint.create(options)
		World.add(world,this.chain)
	}

	display(){
		if(this.chain.bodyA!=null){
			var pointA=this.bodyA.position;
			var pointB=this.pointB

            strokeWeight(2);
            stroke("white")		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}
