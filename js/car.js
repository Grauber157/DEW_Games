class Car {
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.speed = 0
        this.acceleration = 0.2
        this.maxSpeed - 2.5
        this.friction = 0.05
        this.angle = 0

        this.controls = new Controls()
    }

    update(){
        if(this.controls.forward){
            this.speed += this.acceleration
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration
        }

        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed
        }
        if(this.speed < -this.maxSpeed/2){
            this.speed = -this.maxSpeed/2
        }

        if(this.speed > 0){
            this.speed -= this.friction
        }
        if(this.speed < 0){
            this.speed += this.friction
        }
        if(Math.abs(this.speed) < this.friction){
            this.speed = 0
        }

        if(this.speed != 0){
            const flip = this.speed > 0?1:-1
            if(this.controls.left){
                this.angle += 0.03 * flip
            }
            if(this.controls.right){
                this.angle -= 0.03 * flip
        }
        }

        

        this.x -= Math.sin(this.angle)*this.speed
        this.y -= Math.cos(this.angle)*this.speed

        if(this.x < 0){
            this.x = innerWidth
        }
        if(this.x > innerWidth){
            this.x = 0
        }

        if(this.y < 0){
            this.y = innerHeight
        }
        if(this.y > innerHeight){
            this.y = 0
        }
    }

    draw(ctx) {
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.angle)

        ctx.beginPath()
        ctx.rect(
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        )
        ctx.fill()

        ctx.restore()
    }


    
}