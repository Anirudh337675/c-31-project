class Plinko
{
    constructor(x,y,radius,options)
    {
          var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }
      
        this.radius=10
        this.body=  Matter.Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body);
    }
    display()
    {
        var roc=this.body.position;
     
      
        ellipseMode(CENTER);
        fill("purple");
        ellipse(roc.x,roc.y,this.radius);

      
       
        
    }

}