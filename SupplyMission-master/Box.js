class Box{
    constructor(x,y,w,h){
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body)
        this.w=w;
        this.h=h;
    }
    display(){
        var pos=this.body.position;
      fill("red");
     stroke("black");
     rectMode(CENTER);
     rect(pos.x,pos.y,this.w,this.h);
    }
}