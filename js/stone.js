class Ball{
    constructor(x,y,rad){
        var option={
            restitution:0.2,
            density:0.9
        }
        this.body=Bodies.circle(x,y,rad,option)
        this.r=rad
    }
    show(){
        ellipseMode(RADIUS)
        fill("yellow")
        ellipse(this.body.position.x,this.body.position.y,this.r)
    }
}