class Divide
{
    constructor(x,y,width,height)
       {
           var options={
           friction:1.0,
           density:0.2,
           isStatic:true
                       }
              this.body=Bodies.rectangle(x,y,width,height,options);

              this.x=x;
              this.y=y;
              this.width=width;
              this.height=height;

              World.add(world,this.body);
       }
        display()
        {
            var angle = this.body.angle;
            var pos = this.body.position;
            push();

            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);

            fill("red");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
    
        }
}