
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

var baseD,baseU,baseL,baseR;

var particles=[]
var plinkos=[]
var divisions=[]

var divisionH=200;
function preload()
{
}
function setup() {
	createCanvas(480,620);

    engine = Engine.create();
	world = engine.world;

  baseD = new Base(150,308,600,10);
	baseU = new Base(150,5,600,10);
	baseL = new Base(3,150,10,700);
	baseR = new Base(237,150,10,700);
	
   for(var k=0;k<=480;k=k+80)
   {
       divisions.push(new Divide(k,550,5,divisionH))//  565
   }


   for(var j=0;j<470;j=j+60)
   {
      plinkos.push(new Plinko(j,75,10));
   }

   for(var j=15;j<470;j=j+70)
   {
      plinkos.push(new Plinko(j,175,10));
   }

   for(var j=0;j<470;j=j+60)
   {
      plinkos.push(new Plinko(j,275,10));
   }

   for(var j=15;j<470;j=j+70)
   {
      plinkos.push(new Plinko(j,375,10));
   }


  
	Engine.run(engine);
}


function draw() {
  
	background(0);
  //borders (display)
  
 baseD.display();
 baseU.display();
 baseL.display();
 baseR.display();

 //divisions (display)
 for(var k=0;k < divisions.length;k++){
divisions[k].display();
 }

//plinkos creation
 for(var j=0;j < plinkos.length;j++){
   plinkos[j].display();
 }
 for(var j=0;j < plinkos.length;j++){
  plinkos[j].display();
}
for(var j=0;j < plinkos.length;j++){
  plinkos[j].display();
}
for(var j=0;j < plinkos.length;j++){
  plinkos[j].display();
}

//particles creation+ display
if(frameCount%10 == 0){
  particles.push(new Particle(random(10,470),50,10));
}

for(var m=0;m < particles.length;m++){
  particles[m].display();
}

  drawSprites();
}
